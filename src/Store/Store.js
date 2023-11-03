import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ReduxSlices/CartSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
