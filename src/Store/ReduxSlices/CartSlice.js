import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products : [],
    favourite : [],
  },
  reducers: {
    add(state, action) {
      state.products.push(action.payload);
    },
    addFavourite(state, action) {
      state.favourite.push(action.payload);
    },
    remove(state, action) {
     state.products = state.products.filter((item)=> item.id !==action.payload)
    },
    removeAll: (state) => {
        state.products = []; 
  },
 
},
});

export const { add, remove, removeAll, addFavourite } = cartSlice.actions;
export default cartSlice.reducer;
