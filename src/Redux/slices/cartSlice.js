import { createSlice } from "@reduxjs/toolkit";


const cartReducer = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // For Adding The Product To Cart
        addtocart: (state, action) => {
            const { id, name, price, qty } = action.payload
            const existingItem = state.find((data) => data.id == id)
            if (!existingItem) {
                state.push({ id, name, price, qty: 1 })
            } else if (existingItem && existingItem.qty < qty) {
                existingItem.qty += 1
            }
        },

        // For Delete Items From Cart
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },

        // For Update The quntity Of Cart Products
        updateQty: (state, action) => {
            const { id, amount, maxQty } = action.payload
            const item = state.find((data) => data.id == id)
            if (item && item.qty <= maxQty) {
                item.qty += amount
            }
        }
    }
})

export const { addtocart, removeItem, updateQty } = cartReducer.actions;
export default cartReducer.reducer;