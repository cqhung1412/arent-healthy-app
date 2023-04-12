import {
	FETCH_BODY_COMP_REQUEST,
	FETCH_BODY_COMP_SUCCESS,
	FETCH_BODY_COMP_FAILURE,
	FETCH_MEALS_REQUEST,
	FETCH_MEALS_SUCCESS,
	FETCH_MEALS_FAILURE,
} from './actionTypes';

import { HomepageActions, HomepageState } from './types';

const initialState: HomepageState = {
	pending: false,
	bodyComps: [],
	meals: [],
	error: null,
};

export default (state = initialState, action: HomepageActions) => {
	switch (action.type) {
		case FETCH_BODY_COMP_REQUEST:
		case FETCH_MEALS_REQUEST:
			return {
				...state,
				pending: true,
			};

		case FETCH_BODY_COMP_SUCCESS:
			return {
				...state,
				pending: false,
				bodyComps: action.payload.body_comps,
				error: null,
			};

		case FETCH_MEALS_SUCCESS:
			return {
				...state,
				pending: false,
				meals: action.payload.meals,
				error: null,
			};

		case FETCH_BODY_COMP_FAILURE:
		case FETCH_MEALS_FAILURE:
			return {
				...state,
				pending: false,
				error: action.payload.error,
			};

		default:
			return {
				...state,
			};
	}
};
