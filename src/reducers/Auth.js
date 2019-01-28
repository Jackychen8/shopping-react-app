
const authReducer = (state = { loggedIn: false, loading: false }, action) => {
  const { type } = action;
  switch (type) {
  	case 'LOGGING_IN':
  		return { ...state, loading: true };
    case 'LOGIN':
      return { ...state, loggedIn: true, loading: false };
  	case 'LOGGING_OUT':
  		return { ...state, loading: true };
    case 'LOGOUT':
      return { ...state, loggedIn: false, loading: false };
    default:
      return state;
  }
}

export default authReducer;