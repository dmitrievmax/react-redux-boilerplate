import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import api from 'services/jsonplaceholder';
import reducer, { getAllPhotosSaga, GET_ALL_PHOTOS_START, GET_ALL_PHOTOS_SUCCESS, GET_ALL_PHOTOS_ERROR } from './index';

describe('galleryPage duck', () => {
	describe('sagas tests', () => {
		it('should get all photos', () => {
			const gen = cloneableGenerator(getAllPhotosSaga)();
			const res = { json: () => null };
			const payload = {};

			expect(gen.next().value).toEqual(put({ type: GET_ALL_PHOTOS_START }));
			expect(gen.next().value).toEqual(call(api.getPhotos));

			// successful case
			const successGen = gen.clone();

			expect(successGen.next(res).value).toEqual(call([res, res.json]));
			expect(successGen.next(payload).value).toEqual(put({
				type: GET_ALL_PHOTOS_SUCCESS,
				payload
			}));
			expect(successGen.next().done).toBeTruthy();

			// error case
			const error = {};

			expect(gen.throw(error).value).toEqual(put({ type: GET_ALL_PHOTOS_ERROR }));
		});
	});

	describe('reducer tests', () => {
		it('should add photos on success', () => {
			const photos = [{}, {}];
			const state = { pending: true, photos: [] };
			const newState = reducer(state, { type: GET_ALL_PHOTOS_SUCCESS, payload: photos });

			expect(newState).toEqual({ pending: false, photos });
		});
	});
});
