/*
state = {
  items: {
    id: {
      name: '',
      price: 1.00,
      currency: 'USD',
      image: '',
      quantity: 1,
      size: ''
    }
  }
}
*/

const cartReducer = (state = { cart: {} }, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItems = Object.assign(state.cart);
      const item = newItems[action.item.id];
      if (item) {
        item.quantity += 1;
      } else {
        newItems[action.item.id] = action.item;
        newItems[action.item.id].quantity = 1;
      }
      return { ...state, cart: newItems };
    case 'DEL_ITEM':
      const Items = Object.assign(state.cart);
      delete Items[action.item.id];
      return { ...state, cart: Items};
    default:
      return state;
  }
}

export default cartReducer;