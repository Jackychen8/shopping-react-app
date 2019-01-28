export const addItem = (item) => dispatch => {
	dispatch({
		type: 'ADD_ITEM',
		item
	})
};

export const delItem = (item) => dispatch => {
	dispatch({
		type: 'DEL_ITEM',
		item
	})
};