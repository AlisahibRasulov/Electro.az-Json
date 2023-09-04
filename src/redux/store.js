import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/CounterSlice';
import addToCardReducer from './slices/addToCardSlice';
import addToBasketReducer from './slices/addToBasketSlice';
import adToLikeReducer from "./slices/addToLikeSlice";

const store=configureStore({
    reducer:{
        counter:counterReducer,
        addToCard:addToCardReducer,
        basket:addToBasketReducer,
        like:adToLikeReducer
    },
});
export default store;