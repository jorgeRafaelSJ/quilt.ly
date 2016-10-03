
const initialState = {
	here: true
}

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN': 
			return state; 
	}
	return state;
}
export default homeReducer;
