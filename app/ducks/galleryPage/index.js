import { createSelector } from 'reselect';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import api from 'services/jsonplaceholder';
import config from '../../appConfig';

export const moduleName = 'galleryPage';
const prefix = `${config.name}/${moduleName}`;

/**
 * Constants
 */

export const GET_ALL_PHOTOS_REQUEST = `${prefix}/GET_ALL_PHOTOS_REQUEST`;
export const GET_ALL_PHOTOS_START = `${prefix}/GET_ALL_PHOTOS_START`;
export const GET_ALL_PHOTOS_SUCCESS = `${prefix}/GET_ALL_PHOTOS_SUCCESS`;
export const GET_ALL_PHOTOS_ERROR = `${prefix}/GET_ALL_PHOTOS_ERROR`;

/**
 * Reducer
 */

const initialState = {
	pending: false,
	photos: []
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_PHOTOS_START:
			return { ...state, pending: true };
		case GET_ALL_PHOTOS_SUCCESS:
			return { ...state, pending: false, photos: payload };
		case GET_ALL_PHOTOS_ERROR:
			return { ...state, pending: false };
		default:
			return state;
	}
};

/**
 * Selectors
 */

export const stateSelector = state => state[moduleName];
export const pendingSelector = createSelector(stateSelector, state => state.pending);
export const photosSelector = createSelector(stateSelector, state => state.photos);

/**
 * Actions
 */

export const getAllPhotos = () => ({ type: GET_ALL_PHOTOS_REQUEST });

/**
 * Sagas
 */

export function* getAllPhotosSaga() {
	yield put({ type: GET_ALL_PHOTOS_START });

	try {
		const res = yield call(api.getPhotos);
		const data = yield call([res, res.json]);

		yield put({ type: GET_ALL_PHOTOS_SUCCESS, payload: data });
	} catch (e) {
		yield put({ type: GET_ALL_PHOTOS_ERROR });
	}
}

export function* saga() {
	yield all([
		takeEvery(GET_ALL_PHOTOS_REQUEST, getAllPhotosSaga)
	]);
}
