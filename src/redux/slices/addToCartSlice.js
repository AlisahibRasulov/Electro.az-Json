import { createSlice } from '@reduxjs/toolkit';

const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addToCart} = addToCartSlice.actions;

export default addToCartSlice.reducer;