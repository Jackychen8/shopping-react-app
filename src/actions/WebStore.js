export const gettingItems = (item) => dispatch => {
	dispatch({
		type: 'GETTING_ITEM',
		item
	})
};

export const getItems = (item) => dispatch => {
	dispatch({
		type: 'GET_ITEM',
		item
	})
};