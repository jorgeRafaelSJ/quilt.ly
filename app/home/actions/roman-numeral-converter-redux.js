import { createAction, handleActions } from 'redux-actions';

/* ============================================================================
REDUCER INIT VALUE
============================================================================= */

const init = {
	numeral: 'XXX',
	integer: 30
};

/* ============================================================================
ACTIONS CONSTANTS
============================================================================= */

const CHANGE_NUMERAL = 'roman_numeral_converter/CHANGE_NUMERAL';
const CHANGE_INTEGER = 'roman_numeral_converter/CHANGE_INTEGER';


/* ============================================================================
ACTIONS - ACTION CREATORS
============================================================================= */

export const changeNumeral = createAction(CHANGE_NUMERAL, (numeral) => ({
		integer: convertNumeralToInteger(numeral),
		numeral
	})
);

export const changeInteger = createAction(CHANGE_INTEGER, (integer) => ({
		integer,
		numeral: convertIntegerToNumeral(integer)
	})
);

const convertNumeralToInteger = (numeral) => {
	let arr = numeral.split('');

	arr.forEach((num, i) => {
		switch(num) {
			case 'I':
				arr[i] = 1;
				break;
			case 'V':
				arr[i] = 5;
				break;
			case 'X': 
				arr[i] = 10;
				break;
			case 'L': 
				arr[i] = 50;
				break;
			case 'C': 
				arr[i] = 100;
				break;
			case 'D':
				arr[i] = 500;
				break;
			case 'M': 
				arr[i] = 1000;
				break;
		}
	});

	return arr.reduce((acc, val, i, arr) => {
		if(i < arr.length - 1) {
			if(val < arr[i + 1]) {
				return acc -= val;
			} else {
				return acc += val;
			}
		} else {
			return acc += val;
		}
	},0);
};

const convertIntegerToNumeral = (integer) => {
	
	let result = '';
	const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
	
	for (let i in lookup ) {
	  while ( integer >= lookup[i] ) {
	    result += i;
	    integer -= lookup[i];
	  }
	}
	
	return result;
}


/* ============================================================================
REDUCER --- ACTION HANDLER
============================================================================= */

export default handleActions({
	[CHANGE_NUMERAL] : (state, action) => {
		return {
			...state,
			numeral: action.payload.numeral,
			integer: action.payload.integer
		}
	},
	[CHANGE_INTEGER] : (state, action) => {
		return {
			...state,
			numeral: action.payload.numeral,
			integer: action.payload.integer
		}
	}
}, init);