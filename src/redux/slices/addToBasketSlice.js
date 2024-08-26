import {createSlice} from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const initialState = JSON.parse(localStorage.getItem('addBasket')) || [];

const addToBasketSlice=createSlice({
  name:"basket",
  initialState,
  reducers:{
    addToBasket:(state, action)=>{
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity += 1; 
      }
      localStorage.setItem('addBasket', JSON.stringify(state));
       
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.find(item => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.find(item => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        
      }
    },
    removeBasket: (state, action) => {
      const productId = action.payload;
      // return state.filter((item) => item.id !== productId);
      const updatedState = state.filter((item) => item.id !== productId);
      state.length = 0;
      state.push(...updatedState);
      localStorage.setItem('addBasket', JSON.stringify(state));
    },
   
    removeBasketAll: state => {
      state.length = 0;
      
     localStorage.removeItem('addBasket');
     },
  },
});



export const {addToBasket,removeBasket,removeBasketAll,incrementQuantity,decrementQuantity}=addToBasketSlice.actions;
export default addToBasketSlice.reducer;