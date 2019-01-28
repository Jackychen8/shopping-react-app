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

export const checkOut = () => dispatch => {
  dispatch({
    type: 'CHECK_OUT',
  })
  fetch(`localhost:xxxx/user/123/checkout`)
    .then(res => checkedOut(res))
    .catch(e => console.log(e));
}

export const checkedOut = (res) => dispatch => {
  dispatch({
    type: 'CHECKED_OUT',
  })
}