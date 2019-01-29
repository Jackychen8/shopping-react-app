const items = [
  {
    name: "Whole Foods Market Cubed Sweet Potatoes, 21 oz",
    id: 0,
    description: "",
    price: 3.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/41bq00kEaPL._AC_US218_.jpg",
  },
];

const cartReducer = (state = { merchandise: items }, action) => {
  switch (action.type) {
    case 'GOT_MERCHANDISE':
      return { ...state, merchandise: action.merchandise, loading: false };
    case 'GET_MERCHANDISE':
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default cartReducer;