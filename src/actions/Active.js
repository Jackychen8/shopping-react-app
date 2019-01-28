// Should use react-navigation. This simplifies it for POC

const changePage = (page) => dispatch => {
	dispatch({
		type: 'CHANGE_PAGE',
		page,
	})
};

export default changePage;