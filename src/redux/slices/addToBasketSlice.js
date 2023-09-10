import {createSlice} from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const initialState = JSON.parse(localStorage.getItem('addBasket')) || [];

const addToBasketSlice=createSlice({
  name:"basket",
  // initialState:[],
  initialState,
  reducers:{
    addToBasket:(state, action)=>{
      // state.push(action.payload);
      // const newItem = action.payload;
      // const existingItem = state.find(item => item.id === newItem.id);
      
      // if (!existingItem) {
      //   state.push(newItem); // Ürünü sepete ekle
      // }

      // const newItem = action.payload;
      // const existingItem = state.find(item => item.id === newItem.id);
      
      // if (!existingItem) {
      //   state.push({ ...newItem, quantity: 1 }); // Yeni ürünü eklerken sayacı 1 olarak ayarla
      // }

      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.push({ ...newItem, quantity: 1 }); // Yeni ürünü eklerken sayacı 1 olarak ayarla
      } else {
        existingItem.quantity += 1; // Ürün sayısını artır
      }
      localStorage.setItem('addBasket', JSON.stringify(state));
       
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.find(item => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
        // localStorage.setItem("addBasket", JSON.stringify(newItem));
        // state.totalPrice += existingItem.price; // Fiyat güncellemesi burada yapılıyor
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.find(item => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        // state.totalPrice -= existingItem.price; // Fiyat güncellemesi burada yapılıyor
      }
    },
    removeBasket: (state, action) => {
      const productId = action.payload;
      // return state.filter((item) => item.id !== productId);
      const updatedState = state.filter((item) => item.id !== productId);
      state.length = 0;
      state.push(...updatedState);
      localStorage.setItem('addBasket', JSON.stringify(state));
      // state.totalPrice -= removedItem.price * removedItem.quantity; // Fiyat güncellemesi burada yapılıyor
    },
    // removeBasketAll:(state)=>state=[],
    removeBasketAll: state => {
      state.length = 0;
      
      //       // Beğenilen ürünleri yerel depolamadan kaldırın
     localStorage.removeItem('addBasket');
     },
  },
});


export const {addToBasket,removeBasket,removeBasketAll,incrementQuantity,decrementQuantity}=addToBasketSlice.actions;
export default addToBasketSlice.reducer;