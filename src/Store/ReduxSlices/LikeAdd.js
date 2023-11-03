import { createSlice } from "@reduxjs/toolkit";

export const LikeAdd = createSlice({
  name: 'Likes',
  initialState: [],
  reducers: {
    addLike: (state, action) => {
      state.push(action.payload)
      console.log(state.length)
    }
  }
});

export const { addLike } = LikeAdd.actions;

export default LikeAdd.reducer;