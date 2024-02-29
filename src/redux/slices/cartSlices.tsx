import { createSlice } from "@reduxjs/toolkit";

const cart: string | null = localStorage.getItem("cart");

const initialState = cart
  ? { ...JSON.parse(cart) }
  : {
      loading: true,
      cartItems: [],
      numberCart: 0,
    };

const cartSlice: any = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const items = action.payload;
      if (state.numberCart == 0) {
        let cart = {
          id: items.id,
          quantity: 1,
          name: items.product_name,
          image: items.thumbnail,
          price: items.price,
        };
        state.cartItems.push(cart);
      } else {
        let check = false;
        state.cartItems.map((item: any, key: any) => {
          if (item.id == items.id) {
            state.cartItems[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: items.id,
            quantity: 1,
            name: items.product_name,
            image: items.thumbnail,
            price: items.price,
          };
          state.cartItems.push(_cart);
        }
      }
      state.numberCart++;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantity: (state: any, action: any) => {
      state.numberCart++;
      state.cartItems[action.payload].quantity++;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseQuantity: (state: any, action: any) => {
      let quantity = state.cartItems[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.cartItems[action.payload].quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state: any, action: any) => {
      let quantity_ = state.cartItems[action.payload].quantity;
      console.log(quantity_);
      state.numberCart = state.numberCart - quantity_;
      state.cartItems = state.cartItems.filter((item: any) => {
        return item.id != state.cartItems[action.payload].id;
      });
      localStorage.setItem("cart", JSON.stringify(state));
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  hideLoading,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
