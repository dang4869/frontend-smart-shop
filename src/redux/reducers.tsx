import { combineReducers } from "redux";
import {
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from "./action";
const initProduct = {
  numberCart: 0,
  Carts: [],
};
 
function todoProduct(state = initProduct, action:any) {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
        let items = action.payload
      if (state.numberCart == 0) {
        let cart = {
          id: items.id,
          quantity: 1,
          name: items.title,
          image: items.thumbnail,
          price: items.price,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item:any, key:any) => {
          if (item.id == items.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: items.id,
            quantity: 1,
            name: items.title,
            image: items.thumbnail,
            price: items.price,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;
 
      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }
 
      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      console.log(quantity_);
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id != state.Carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
}
const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;
