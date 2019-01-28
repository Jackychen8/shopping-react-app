const items = [
{
  name: "Whole Foods Market Cubed Sweet Potatoes, 21 oz",
  id: 0,
  description: "",
  price: 3.99,
  image: "https://images-na.ssl-images-amazon.com/images/I/41bq00kEaPL._AC_US218_.jpg",
},
{
  name: "Organic Garnet Yams, 3 lb",
  id: 1,
  description: "",
  price: 4.66,
  image: "https://images-na.ssl-images-amazon.com/images/I/41IZ8fYyyXL._AC_US218_.jpg",
},
{
  name: "Organic Sweet Potatoes (White to Cream Flesh), 2 lb",
  id: 2,
  description: "",
  price: 5.99,
  image: "https://images-na.ssl-images-amazon.com/images/I/41GegBfIJ1L._AC_US218_.jpg",
},
{
  name: "Organic Yams (Yellow to Orange Flesh), 2 lb",
  id: 3,
  description: "",
  price: 5.99,
  image: "https://images-na.ssl-images-amazon.com/images/I/41PUUJkyn-L._AC_US218_.jpg",
},
{
  name: "Organic Japanese Sweet Potatoes, 2 lb",
  id: 4,
  description: "",
  price: 3.50,
  image: "https://images-na.ssl-images-amazon.com/images/I/41PglCxMx2L._AC_US218_.jpg",
},
{
  name: "African Yam Tubers (1 lb tuber)",
  id: 5,
  description: "",
  price: 9.69,
  image: "https://images-na.ssl-images-amazon.com/images/I/519vtCldGNL._AC_US218_.jpg",
},
{
  name: "Cascadian Farm Organic Fire Roasted Sweet Potatoes, 16oz Bag (Frozen), Organically Farmed Frozen Vegetables, Non-GMO",
  id: 6,
  description: "",
  price: 2.86,
  image: "https://images-na.ssl-images-amazon.com/images/I/51RIlTWgxrL._AC_US218_.jpg",
},
];

const cartReducer = (state = { merchandise: items }, action) => {
  switch (action.type) {
    case 'GET_MERCHANDISE_PAGE':
      return { ...state, merchandise: action.items };
    // case 'DEL_ITEM':
    //   const Items = Object.assign(state.cart);
    //   delete Items[action.item.id];
    //   return { ...state, cart: Items};
    default:
      return state;
  }
}

export default cartReducer;