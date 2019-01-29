import { baseURL } from "../common";

import changePage from "./Active";
import { fetchHistory } from "./User";

export const addItem = (item) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_ITEM',
  })
  const { loggedIn, user } = getState().authReducer;
  if(loggedIn){
    fetch(`${baseURL}/users/${user.id}/cart`,
      {
        method: "PUT",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        body: JSON.stringify({
          action: "add",
          item: item
        })
      }).then(res => {
        if (res.status >= 400){
          return;// Handle Error
        };
        return res.json().then((json) => {
          if (json !== undefined) {
            dispatch(addedItem(json));
          }
        });
    }).catch(e => console.log(e));
  } else {
    dispatch(addedItem(item));
  }
};

export const addedItem = (item) => dispatch => {
  dispatch({
    type: 'ADDED_ITEM',
    item
  })
};

export const delItem = (item) => (dispatch, getState) => {
  dispatch({
    type: 'DEL_ITEM',
  });
  const { loggedIn, user } = getState().authReducer;
  if(loggedIn){
    fetch(`${baseURL}/users/${user.id}/cart`,
      {
        method: "PUT",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        body: JSON.stringify({
          action: "del",
          item: item
        })
      }).then(res => {
        if (res.status >= 400){
          return;// Handle Error
        };
        return res.json().then((json) => {
          if (json !== undefined) {
            dispatch(deletedItem(json));
          }
        });
    }).catch(e => console.log(e));
  } else {
    dispatch(deletedItem(item));
  }
};

export const deletedItem = (item) => dispatch => {
  dispatch({
    type: 'DELETED_ITEM',
    item
  })
};

export const checkOut = () => (dispatch, getState) => {
  dispatch({
    type: 'CHECK_OUT',
  })
  const { loggedIn, user } = getState().authReducer;
  if(loggedIn){
    fetch(`${baseURL}/users/${user.id}/history`, {
      method: "PUT",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "cache-control": "no-cache"
      },
      body: JSON.stringify({
        info: { name: "", address: "", cc: "" }
      })
    })
      .then(res => {
        dispatch(checkedOut());
        dispatch(fetchHistory());
        dispatch(changePage("history"));
      })
      .catch(e => console.log(e));
  } else {
    dispatch(checkedOut());
    dispatch(changePage("store"));
  }
}

export const checkedOut = () => dispatch => {
  dispatch({
    type: 'CHECKED_OUT',
  })
}

export const emptyCart = (res) => dispatch => {
  dispatch({
    type: 'EMPTY_CART',
  })
}
