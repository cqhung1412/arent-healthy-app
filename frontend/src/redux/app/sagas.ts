import { all, fork, put, takeLatest } from 'redux-saga/effects';
import type { ForkEffect, PutEffect } from 'redux-saga/effects';
import types from './types';
import type { Action } from '../types';
import { fetchUserSuccess, error } from './actions';
import httpUtil from '../../utils/http.util';
import _ from 'lodash';

function* login(): Generator<
	ForkEffect<never> | PutEffect<Action> | Promise<void>
> {
	try {
		const response: any = yield httpUtil.getJson('/api/login', false, {
			email: 'cqhung1412@gmail.com',
			password: 'password',
		});
		const resp = _.get(response, 'data', null);
		localStorage.setItem('access_token', resp.access_token);
		yield put(fetchUserSuccess(resp.user));
	} catch (err) {
		yield put(error(err as Error));
	}
}

function* fetchUser(): Generator<
	ForkEffect<never> | PutEffect<Action> | Promise<void>
> {
	try {
		const response: any = yield httpUtil.getJson('/api/user', true);
		const user = _.get(response, 'data', null);
		yield put(fetchUserSuccess(user));
	} catch (err) {
		yield put(error(err as Error));
	}
}

function* watchFetchUser(): Generator<ForkEffect<never>> {
	yield takeLatest(types.FETCH_USER, fetchUser);
}

function* doFetchUser(): Generator<ForkEffect<any>> {
	yield fork(watchFetchUser);
}

export default function* appSaga(): Generator<any> {
	try {
		yield all([doFetchUser()]);
	} catch (error) {
		console.error(error);
	}
}
