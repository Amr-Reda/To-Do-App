const initState = {
	items: [],
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'FETCH_ITEMS') {
		return {
			...state,
			items: action.data,
		};
	}

	if (action.type === 'POST_ITEM') {
		return {
			...state,
			items: [action.data, ...state.items],
		};
	}

	if (action.type === 'DELETE_ITEM') {
		return {
			...state,
			items: state.items.filter((item) => item._id !== action.data._id),
		};
	}
	return state;
};
//Note: we can export more than one reducer
export default rootReducer;
