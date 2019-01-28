import { combineReducers } from 'redux';

import cartReducer from './Cart';
import merchandiseReducer from './Merchandise';
import activeReducer from './Active';
import authReducer from './Auth';

export default combineReducers({
	cartReducer,
	merchandiseReducer,
	activeReducer,
	authReducer,
});