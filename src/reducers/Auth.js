
const authReducer = (state = { loggedIn: false, loading: false, user: {} }, action) => {
  const { type, user } = action;
  switch (type) {
  	case 'LOGGING_IN':
  		return { ...state, loading: true };
    case 'LOGIN':
      return { ...state, loggedIn: true, loading: false, user};
  	case 'LOGGING_OUT':
  		return { ...state, loading: true };
    case 'LOGOUT':
      return { ...state, loggedIn: false, loading: false, user: {} };
    case 'SIGN_UP':
      return { ...state, loading: true };
    case 'SIGNED_UP':
      return { ...state, loading: false, loggedIn: true, user }
    default:
      return state;
  }
}

export default authReducer;