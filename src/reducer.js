export const initialState = {
  basket: [],
  user: null,
};
//selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

// console.log('gettotal', getBasketTotal );

// reducer is the how we able to dispatch the data when we click add to basket
// and how we able to pull it

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
