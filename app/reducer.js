import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import home from './home/actions/redux';
import rn_converter from './home/actions/roman-numeral-converter-redux';
// combines all the reducers into one main reducer object passed into the store.js
const appReducer = combineReducers({
	routing,
	home,
	rn_converter
});

const rootReducer = (state, action) => {
	// state resetter for specific actions

	return appReducer(state, action);
};

export default rootReducer;