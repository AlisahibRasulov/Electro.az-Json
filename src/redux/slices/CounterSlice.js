import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name:"counter",
  initialState:0,
  reducers:{
    increment:(state)=>state+1,
    decrement:(state)=>{
      if(state == 0){
        return state; 
    }else{
       return state - 1;
    }
    }
    
  }
});

export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;