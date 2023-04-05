import type { User } from '../types';
import types from './types';

export function login() {
	return {
		type: types.LOGIN,
	};
}

export function loginSuccess(user: User) {
	return {
		type: types.LOGIN_SUCCESS,
		payload: user,
	};
}

export function fetchUser() {
	return {
		type: types.FETCH_USER,
	};
}

export function fetchUserSuccess(user: User) {
	return {
		type: types.FETCH_USER_SUCCESS,
		payload: user,
	};
}

export function error(error: Error) {
    return {
        type: types.REQUEST_FAILED,
        error,
    }
}