const fetchHistory = () => dispatch => {
  dispatch({
    type: "FETCH_HISTORY",
  })
  fetch(`localhost:xxxx/user/${}/history`)
    .then(res => fetchedHistory(res))
    .catch(e => console.log(e));
}

const fetchedHistory = (res) => dispatch => {
  dispatch({
    type: "FETCHED_HISTORY",
    history: res,
  })
}
