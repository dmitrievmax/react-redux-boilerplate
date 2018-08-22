import { createSelector } from 'reselect';
import config from '../../appConfig';

export const moduleName = 'homePage';
const prefix = `${config.name}/${moduleName}`;

/**
 * Constants
 */

export const ADD_VISIT = `${prefix}/ADD_VISIT`;

/**
 * Reducer
 */

const initialState = {
	visitCounter: 0
};

export default (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case ADD_VISIT:
			return { ...state, visitCounter: state.visitCounter + 1 };
		default:
			return state;
	}
};

/**
 * Actions
 */

export const addVisit = () => ({
	type: ADD_VISIT
});

/**
 * Selectors
 */

export const stateSelector = state => state[moduleName];
export const visitCounterSelector = createSelector(stateSelector, state => state.visitCounter);
