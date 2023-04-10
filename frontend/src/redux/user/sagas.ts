import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
	loginSuccess,
	loginFailure,
	fetchUserSuccess,
	fetchUserFailure,
} from './actions';
import { LOGIN_REQUEST, FETCH_USER_REQUEST } from './actionTypes';
import { IUser } from './types';
import httpUtil from '../../utils/http.util';
import _ from 'lodash';

const login = () =>
	httpUtil
		.postJson('/api/login', false, {
			email: 'cqhung1412@gmail.com',
			password: 'password',
		})
		.then((data) => {
			const resp = _.get(data, 'data', null) as unknown as {
				access_token: string;
				user: IUser;
			};
			localStorage.setItem('access_token', resp?.access_token);
			return resp.user;
		});

/*
  Worker Saga: Fired on LOGIN_REQUEST action
*/
function* loginSaga(): Generator {
	try {
		const response = yield call(login);
		yield put(
			loginSuccess({
				user: response as IUser,
			})
		);
	} catch (e: any) {
		yield put(
			loginFailure({
				error: e.message,
			})
		);
	}
}

const getUser = () => httpUtil.getJson('/api/user', true);

/*
  Worker Saga: Fired on FETCH_USER_REQUEST action
*/
function* fetchUserSaga(): Generator {
	try {
		const response = yield call(getUser);
		yield put(
			fetchUserSuccess({
				user: response as IUser,
			})
		);
	} catch (e: any) {
		yield put(
			fetchUserFailure({
				error: e.message,
			})
		);
	}
}

/*
  Starts worker saga on latest dispatched actions.
  Allows concurrent increments.
*/
function* userSaga() {
	yield all([
		takeLatest(LOGIN_REQUEST, loginSaga),
		takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
	]);
}

export default userSaga;
