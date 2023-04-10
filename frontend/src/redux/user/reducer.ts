import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from './actionTypes';

import { UserActions, UserState } from './types';

const initialState: UserState = {
	pending: false,
	user: null,
	error: null,
};

export default (state = initialState, action: UserActions) => {
	switch (action.type) {
		case LOGIN_REQUEST:
		case FETCH_USER_REQUEST:
			return {
				...state,
				pending: true,
			};
		case LOGIN_SUCCESS:
		case FETCH_USER_SUCCESS:
			return {
				...state,
				pending: false,
				users: action.payload.user,
				error: null,
			};
		case LOGIN_FAILURE:
		case FETCH_USER_FAILURE:
			return {
				...state,
				pending: false,
				users: [],
				error: action.payload.error,
			};
		default:
			return {
				...state,
			};
	}
};
