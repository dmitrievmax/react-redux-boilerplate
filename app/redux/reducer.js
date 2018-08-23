import { combineReducers } from 'redux';
import homePageReducer, { moduleName as homePageModule } from 'ducks/homePage/index';

export default combineReducers({
	[homePageModule]: homePageReducer
});
