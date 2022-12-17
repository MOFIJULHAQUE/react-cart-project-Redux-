import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      //if the item already exist in cart then
      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      //if the item already exist in cart then
      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) {
            i.quantity -= 1;
          }
        });
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
  }
);
