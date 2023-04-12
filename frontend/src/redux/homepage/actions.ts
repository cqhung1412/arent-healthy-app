import {
	FETCH_BODY_COMP_REQUEST,
	FETCH_BODY_COMP_SUCCESS,
	FETCH_BODY_COMP_FAILURE,
	FETCH_MEALS_REQUEST,
	FETCH_MEALS_SUCCESS,
	FETCH_MEALS_FAILURE,
} from './actionTypes';
import {
	FetchBodyCompRequest,
	FetchBodyCompSuccess,
	FetchBodyCompFailure,
	FetchMealsRequest,
	FetchMealsSuccess,
	FetchMealsFailure,
	FetchBodyCompSuccessPayload,
	FetchBodyCompFailurePayload,
  FetchMealsSuccessPayload,
  FetchMealsFailurePayload,
} from './types';

export const fetchBodyComps = (): FetchBodyCompRequest => ({
	type: FETCH_BODY_COMP_REQUEST,
});

export const fetchBodyCompsSuccess = (
	payload: FetchBodyCompSuccessPayload
): FetchBodyCompSuccess => ({
	type: FETCH_BODY_COMP_SUCCESS,
	payload,
});

export const fetchBodyCompsFailure = (
	payload: FetchBodyCompFailurePayload
): FetchBodyCompFailure => ({
	type: FETCH_BODY_COMP_FAILURE,
	payload,
});

export const fetchMeals = (): FetchMealsRequest => ({
  type: FETCH_MEALS_REQUEST,
});

export const fetchMealsSuccess = (
  payload: FetchMealsSuccessPayload
): FetchMealsSuccess => ({
  type: FETCH_MEALS_SUCCESS,
  payload,
});

export const fetchMealsFailure = (
  payload: FetchMealsFailurePayload
): FetchMealsFailure => ({
  type: FETCH_MEALS_FAILURE,
  payload,
});
