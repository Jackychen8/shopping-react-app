
export const login = () => dispatch => (
	dispatch({
		type: 'LOGIN',
	})
);

export const logout = () => dispatch => {
	dispatch({
		type: 'LOGOUT',
	})
};

// TODO: replace with logged_in and logged_out

export const logging_in = (email, password) => dispatch => {
	dispatch({
		type: 'LOGGING_IN',
		email,
		password
	})

	fetch('localhost:xxxx/login')
		.then(res => login())
		.catch(e => console.log(e));

}

export const logging_out = () => dispatch => {
	dispatch({
		type: 'LOGGING_OUT',
	})

	fetch('localhost:xxxx/logout')
		.then(res => logout())
		.catch(e => console.log(e));
}
