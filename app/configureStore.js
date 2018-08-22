import { createStore } from 'redux';
import rootReducer from './ducks';

export default (initialState = {}) => createStore(
	rootReducer,
	initialState
);
