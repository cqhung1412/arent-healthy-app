import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
	fetchBodyCompsSuccess,
	fetchBodyCompsFailure,
	fetchMealsSuccess,
	fetchMealsFailure,
} from './actions';
import { FETCH_BODY_COMP_REQUEST, FETCH_MEALS_REQUEST } from './actionTypes';
import { IBodyComp, IMeal } from './types';
import httpUtil from '../../utils/http.util';
