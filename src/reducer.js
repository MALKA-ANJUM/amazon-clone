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
      
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id} as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

      case "SET_USER":
      return{
        ...state,
        user: action.user,

      }
    default:
      return state;
  }
};

export default reducer;
