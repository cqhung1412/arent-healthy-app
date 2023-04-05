import { fromJS } from 'immutable';
import type { Map } from 'immutable';
import types from './types';
import type { User, Action } from '../types';

export type AppState = {
	user: User | null;
	loading: boolean;
	error: any;
	errorInfo: string;
};

export type State = Map<keyof AppState, any>;

const initialState = fromJS<AppState>({
	user: null,
	loading: false,
	error: null,
	errorInfo: '',
});

function appReducer(state = initialState, action: Action) {
	switch (action.type) {
		case types.LOGIN:
			return state.set('loading', true);
		case types.LOGIN_SUCCESS:
			return state.set('user', action.payload).set('loading', false);
		case types.FETCH_USER:
			return state.set('loading', true);
		case types.FETCH_USER_SUCCESS:
			return state.set('user', action.payload).set('loading', false);
		case types.REQUEST_FAILED:
			return state
				.set('error', true)
				.set('errorInfo', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default appReducer;
