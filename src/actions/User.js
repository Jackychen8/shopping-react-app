import { baseURL } from "../common";

export const fetchHistory = () => (dispatch, getState) => {
  dispatch({
    type: "FETCH_HISTORY",
  })
  const { user } = getState().authReducer;
  fetch(`${baseURL}/users/${user.id}/history`)
    .then(res => {
      res.json().then(body => dispatch(fetchedHistory(body.history)))
    })
    .catch(e => console.log(e));
}

const fetchedHistory = (history) => dispatch => {
  dispatch({
    type: "FETCHED_HISTORY",
    history,
  })
}
