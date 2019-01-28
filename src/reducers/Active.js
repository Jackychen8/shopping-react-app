const activeReducer = (state = { page: 'store' }, action) => {
  const { type, page } = action;
  switch (type) {
    case 'CHANGE_PAGE':
      return { ...state, page: page };
    default:
      return state;
  }
}

export default activeReducer;