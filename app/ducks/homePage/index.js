export const moduleName = 'homePage';

/**
 * Constants
 */

export const ADD_VISIT = 'ADD_VISIT';

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
export const visitCounterSelector = state => stateSelector(state).visitCounter;
