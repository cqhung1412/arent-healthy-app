import {
  FETCH_BODY_COMP_REQUEST,
  FETCH_BODY_COMP_SUCCESS,
  FETCH_BODY_COMP_FAILURE,
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_FAILURE,
} from './actionTypes'

export interface IBodyComp {
  id: number;
  body_fat: number;
  weight: number;
  monthstamp: string;
}

export interface IMeal {
  id: number;
  type: string;
  image_path: string;
  datestamp: string;
}

export interface HomepageState {
  pending: boolean;
  bodyComps: IBodyComp[];
  meals: IMeal[];
  error: string | null;
}

export interface FetchBodyCompSuccessPayload {
  body_comps: IBodyComp[];
}

export interface FetchBodyCompFailurePayload {
  error: string;
}

export interface FetchMealsSuccessPayload {
  meals: IMeal[];
}

export interface FetchMealsFailurePayload {
  error: string;
}

export interface FetchBodyCompRequest {
  type: typeof FETCH_BODY_COMP_REQUEST;
}

export type FetchBodyCompSuccess = {
  type: typeof FETCH_BODY_COMP_SUCCESS;
  payload: FetchBodyCompSuccessPayload;
};

export type FetchBodyCompFailure = {
  type: typeof FETCH_BODY_COMP_FAILURE;
  payload: FetchBodyCompFailurePayload;
};

export interface FetchMealsRequest {
  type: typeof FETCH_MEALS_REQUEST;
}

export type FetchMealsSuccess = {
  type: typeof FETCH_MEALS_SUCCESS;
  payload: FetchMealsSuccessPayload;
};

export type FetchMealsFailure = {
  type: typeof FETCH_MEALS_FAILURE;
  payload: FetchMealsFailurePayload;
};

export type HomepageActions =
  | FetchBodyCompRequest
  | FetchBodyCompSuccess
  | FetchBodyCompFailure
  | FetchMealsRequest
  | FetchMealsSuccess
  | FetchMealsFailure;
