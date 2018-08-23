import { combineReducers } from 'redux';
import homePageReducer, { moduleName as homePageModule } from 'ducks/homePage/index';
import galleryPageReducer, { moduleName as galleryPageModule } from 'ducks/galleryPage/index';

export default combineReducers({
	[homePageModule]: homePageReducer,
	[galleryPageModule]: galleryPageReducer,
});
