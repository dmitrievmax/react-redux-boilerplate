import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import homePageReducer, { moduleName as homePageModule } from 'ducks/homePage/index';
import galleryPageReducer, { moduleName as galleryPageModule } from 'ducks/galleryPage/index';

export default combineReducers({
	[homePageModule]: homePageReducer,
	[galleryPageModule]: galleryPageReducer,
	form: formReducer
});
