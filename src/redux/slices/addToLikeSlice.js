import {createSlice} from '@reduxjs/toolkit';

const addToLikeSlice=createSlice({
  name:"like",
  initialState:[],
  reducers:{
    addToLike:(state, action)=>{
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.push({ ...newItem, quantity: 1 }); // Yeni ürünü eklerken sayacı 1 olarak ayarla
      } else {
        existingItem.quantity += 1; // Ürün sayısını artır
      }
      
       
    },
   
    removeLike: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
    removeLikeAll:(state)=>state=[],
  },
});


export const {addToLike,removeLike,removeLikeAll}=addToLikeSlice.actions;
export default addToLikeSlice.reducer;