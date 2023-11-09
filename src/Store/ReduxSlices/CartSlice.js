import { createSlice } from "@reduxjs/toolkit";
import Product from '../../Pages/ProductData/index'

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products : [],
    favourite : [],
    items: Product.map((product)=> ({...product, quantity: 0 })),
    search:"",
  },
  reducers: {
    add(state, action) {
      let find = state.products.findIndex((item)=> item.id === action.payload.id);
      if(find >=0){
        state.products[find].quantity +=1;
      }else{
        state.products.push( { ...action.payload, quantity: 1});
      }
      
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
  searchItem: (state, action) =>{
    state.search= action.payload;
  },
  increaseQuantity : (state, action) => {
    state.products = state.products.map((item) => {
      if(item.id === action.payload) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    })
  },
  decreaseQuantity : (state, action) => {
    state.products = state.products.map((item) => {
      if(item.id === action.payload) {
        return {...item, quantity: item.quantity - 1};
      }
      return item;
    })
  }
 
},
});

export const { add, remove, removeAll, addFavourite , searchItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
