import {createSlice} from '@reduxjs/toolkit';

const addToBasketSlice=createSlice({
  name:"basket",
  initialState:[],
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
      
       // Fiyat güncellemesi burada yapılıyor
        // state.totalPrice += newItem.price;
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.find(item => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
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
      return state.filter((item) => item.id !== productId);
      // state.totalPrice -= removedItem.price * removedItem.quantity; // Fiyat güncellemesi burada yapılıyor
    },
    removeBasketAll:(state)=>state=[],
  },
});


export const {addToBasket,removeBasket,removeBasketAll,incrementQuantity,decrementQuantity}=addToBasketSlice.actions;
export default addToBasketSlice.reducer;