import { combineReducers } from 'redux';
import homePageReducer, { moduleName as homePageModule } from './homePage';

export default combineReducers({
	[homePageModule]: homePageReducer
});
