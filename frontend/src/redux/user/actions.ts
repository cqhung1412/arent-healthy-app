import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
} from './actionTypes';
import {
	LoginRequest,
	LoginSuccess,
	LoginFailure,
	FetchUserRequest,
	FetchUserSuccess,
	FetchUserFailure,
	FetchUserFailurePayload,
	FetchUserSuccessPayload,
} from './types';

export const login = (): LoginRequest => ({
	type: LOGIN_REQUEST,
});

export const loginSuccess = (
	payload: FetchUserSuccessPayload
): LoginSuccess => ({
	type: LOGIN_SUCCESS,
	payload,
});

export const loginFailure = (
	payload: FetchUserFailurePayload
): LoginFailure => ({
	type: LOGIN_FAILURE,
	payload,
});

export const fetchUser = (): FetchUserRequest => ({
	type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (
	payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
	type: FETCH_USER_SUCCESS,
	payload,
});

export const fetchUserFailure = (
	payload: FetchUserFailurePayload
): FetchUserFailure => ({
	type: FETCH_USER_FAILURE,
	payload,
});
