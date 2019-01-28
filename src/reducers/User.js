const userReducer = (state = { history: [] }, action) => {
  const { type, history } = action;
  switch (type) {
    case 'FETCH_HISTORY':
      return { ...state, loading: true };
    case 'FETCHED_HISTORY':
      return { ...state, history, loading: false };
    default:
      return state;
  }
}

export default userReducer;