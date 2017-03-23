import { createAction, handleActions } from 'redux-actions';
import { push } from 'react-router-redux';


/* ============================================================================
REDUCER INIT VALUE
============================================================================= */

const init = {
	user: {
		name: '',
		age: ''
	},
	hello: false
};

/* ============================================================================
ACTIONS CONSTANTS
============================================================================= */

const SAY_HELLO = 'home/SAY_HELLO';
const SET_USER = 'home/SET_USER';

/* ============================================================================
ACTIONS - ACTION CREATORS
============================================================================= */

export const sayHello = createAction(SAY_HELLO);

export const setUser = createAction(SET_USER);

/* ============================================================================
REDUCER --- ACTION HANDLER
============================================================================= */

export default handleActions({
	[SAY_HELLO] : state => ({
		...state,
		hello: true
	}),
	[SET_USER] : (state, action) => {
		return {
			...state,
			user: action.payload.user
		}
	}
}, init);