import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import appSaga from './app/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(appSaga);

export default store;
