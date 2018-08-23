import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState = {}) => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
