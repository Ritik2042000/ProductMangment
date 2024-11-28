import { configureStore } from "@reduxjs/toolkit";
import productReducers from './slices/productSlice'
import cartReducer from './slices/cartSlice'


export const store = configureStore({
    reducer: {
        product: productReducers,
        cart: cartReducer
    }
})