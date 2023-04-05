import { createSelector } from 'reselect';
import type { State } from './reducer';

const selectApp = (state: any): State => state.get('app');

const selectLoading = () =>
	createSelector(selectApp, (app) => app.get('loading'));

const selectError = () =>
	createSelector(selectApp, (app) => app.get('error'));

const selectErrorInfo = () =>
	createSelector(selectApp, (app) => app.get('errorInfo'));

const selectUser = () =>
	createSelector(selectApp, (app) => app.get('user'));

export {
	selectApp,
	selectLoading,
	selectError,
	selectErrorInfo,
	selectUser,
};
