import { baseURL } from "../common";
import changePage from "./Active";
import { addItem, emptyCart } from "./Cart";

export const login = (user) => dispatch => (
	dispatch({
		type: 'LOGIN',
    user,
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
		type: 'LOGGING_IN'
	})

	fetch(`${baseURL}/auth`, {
      method: "POST",
      headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
      body: JSON.stringify({email, password}),
    })
		.then(res => {
        if (res.status >= 400){
          return;// Handle Error
        };
        return res.json().then((json) => {
          if (json !== undefined) {
            dispatch(login(json));
            dispatch(changePage("store"));
            const { cart } = json;
            // When User logs in, combine existing cart and saved cart
            for (let prop in cart) {
              if (cart.hasOwnProperty(prop)) {
                dispatch(addItem(cart[prop]));
              }
            }
          }
        });
    })
		.catch(e => console.log(e));

};

export const logging_out = () => dispatch => {
	dispatch({
		type: 'LOGGING_OUT',
	})
  dispatch(logout());
  // Call backend and nullify token
	// fetch(`${baseURL}/auth`)
	// 	.then(res => logout())
	// 	.catch(e => console.log(e));
  dispatch(emptyCart());
  dispatch(changePage("store"))
};

export const signUp = (body) => dispatch => {
  dispatch({
    type: 'SIGN_UP',
  })
  fetch(`${baseURL}/users`, {
      method: "POST",
      headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
      body: JSON.stringify(body),
    })
    .then(res => {
      if (res.status >= 400){
        return;// Handle Error
      };
      return res.json().then((json) => {
        if (json !== undefined) {
          dispatch(signedUp(json));
          dispatch(changePage("store"));
        }
      });
    })
    .catch(e => console.log(e));
};

export const signedUp = (user) => dispatch => (
  dispatch({
    type: 'SIGNED_UP',
    user,
  })
);
