import Q from 'q';
import axios from 'axios';
import queryString from 'query-string';
import config from '../config';

async function makeHttpRequest(
	method: string,
	path: string,
	data: Record<string, any> | null,
	customHeaders: any
) {
	let deferred = Q.defer();
	let url = config.API_URL + path;
	if (data) {
		switch (method) {
			case 'GET':
			case 'DELETE':
				url = url + '?' + queryString.stringify(data);
				data = null;
				break;
			default:
				break;
		}
	}

	try {
		let req = await axios({
			method,
			url,
			data,
			headers: customHeaders,
			withCredentials: true,
			timeout: 60 * 5 * 1000, // 5 minutes
		});
		if (req.status === 200) {
			deferred.resolve(req.data);
		} else {
			deferred.reject(req.data);
		}
	} catch (error) {
		deferred.reject(error);
	}
}

function makeJsonRequest(
	method: string,
	path: string,
	data: Record<string, any> | null,
	customHeaders: any
) {
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		...customHeaders,
	};
	return makeHttpRequest(method, path, data, headers);
}

function getAuthorizationHeader(headers: any) {
	return {
		...headers,
		Authorization: `Bearer ${localStorage.getItem(config.TOKEN_NAME)}`,
	};
}

function getJson(
	path: any,
	isAuth: boolean = false,
	data: any = null,
	customHeaders: any = null
): any {
	return makeJsonRequest(
		'GET',
		path,
		data,
		isAuth ? getAuthorizationHeader(customHeaders) : customHeaders
	);
}

function postJson(
	path: any,
	isAuth: boolean = false,
	data: any = null,
	customHeaders: any = null
) {
	return makeJsonRequest(
		'POST',
		path,
		data,
		isAuth ? getAuthorizationHeader(customHeaders) : customHeaders
	);
}

function putJson(path: any, data: any, isAuth: any, customHeaders: any) {
	return makeJsonRequest(
		'PUT',
		path,
		data,
		isAuth ? getAuthorizationHeader(customHeaders) : customHeaders
	);
}

function deleteJson(path: any, data: any, isAuth: any, customHeaders: any) {
	return makeJsonRequest(
		'DELETE',
		path,
		data,
		isAuth ? getAuthorizationHeader(customHeaders) : customHeaders
	);
}

export default {
	getJson,
	postJson,
	putJson,
	deleteJson,
	makeJsonRequest,
};
