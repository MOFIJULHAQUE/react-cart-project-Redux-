import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/Reducer";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
