import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"; // Import the cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Pass the reducer, not the slice
  },
});

export default store;