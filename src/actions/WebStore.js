import { baseURL } from "../common";


const gotMerchandise = (merchandise) => dispatch => {
  dispatch({
    type: 'GOT_MERCHANDISE',
    merchandise
  })
};

export const getMerchandise = () => dispatch => {
	dispatch({
		type: 'GET_MERCHANDISE'
	})
  fetch(`${baseURL}/merchandise`, { headers: {
        "Accept": "application/json",
        "Cache-Control": "no-cache"
      }
    },)
    .then(res => {
      res.json()
        .then(json => {
          dispatch(gotMerchandise(json));
        }).catch(e => console.log(e));

    }).catch(e => {
      console.log(e);
    });
};