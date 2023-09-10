import {createSlice} from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const initialState = JSON.parse(localStorage.getItem('addLike')) || [];

const addToLikeSlice=createSlice({
  name:"like",
  // initialState:[],
 initialState,
  reducers:{
    addToLike:(state, action)=>{
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.push({ ...newItem, quantity: 1 }); // Yeni ürünü eklerken sayacı 1 olarak ayarla
        // localStorage.setItem("addLike", JSON.stringify(newItem))
      } else {
        existingItem.quantity += 1; // Ürün sayısını artır
      }

      localStorage.setItem('addLike', JSON.stringify(state));
    },
   
    removeLike: (state, action) => {
      const productId = action.payload;
      // return state.filter((item) => item.id !== productId);
      const updatedState = state.filter((item) => item.id !== productId);
      state.length = 0;
      state.push(...updatedState);
      localStorage.setItem('addLike', JSON.stringify(state));
    },
    // removeLikeAll:(state)=>state=[],
    removeLikeAll: state => {
      state.length = 0;
      
      //       // Beğenilen ürünleri yerel depolamadan kaldırın
     localStorage.removeItem('addLike');
     },
  },
});


export const {addToLike,removeLike,removeLikeAll}=addToLikeSlice.actions;
export default addToLikeSlice.reducer;





// import { createSlice } from '@reduxjs/toolkit';

// const initialState = JSON.parse(localStorage.getItem('addLike')) || [];

// const addToLikeSlice = createSlice({
//   name: 'like',
//   initialState,
//   reducers: {
//     addToLike: (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.find(item => item.id === newItem.id);

//       if (!existingItem) {
//         state.push({ ...newItem, quantity: 1 });
//       } else {
//         existingItem.quantity += 1;
//       }

//       // Beğenilen ürünleri yerel depolamada güncelleyin
//       localStorage.setItem('addLike', JSON.stringify(state));
//     },

//     removeLike: (state, action) => {
//       const productId = action.payload;
//       const updatedState = state.filter(item => item.id !== productId);
//       state.length = 0;
//       state.push(...updatedState);

//       // Beğenilen ürünleri yerel depolamada güncelleyin
//       localStorage.setItem('addLike', JSON.stringify(state));
//     },

//     removeLikeAll: state => {
//       state.length = 0;

//       // Beğenilen ürünleri yerel depolamadan kaldırın
//       localStorage.removeItem('addLike');
//     },
//   },
// });

// export const { addToLike, removeLike, removeLikeAll } = addToLikeSlice.actions;
// export default addToLikeSlice.reducer;
