import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: 'Mobile', qty: 6, price: 1500 },
    { id: 2, name: 'Laptop', qty: 4, price: 5000 },
    { id: 3, name: 'Earphone', qty: 10, price: 500 },
    { id: 4, name: 'Table', qty: 3, price: 1800 },
    { id: 5, name: 'Tv', qty: 4, price: 9000 },
    { id: 6, name: 'Mouse', qty: 6, price: 400 },
]

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{}
})

// export const {} = productSlice.actions

export default  productSlice.reducer;
