import { all } from 'redux-saga/effects';
import { saga as galleryPageSaga } from 'ducks/galleryPage';

export default function* rootSaga() {
	yield all([galleryPageSaga()]);
}
