import {createSlice} from '@reduxjs/toolkit'

const product = []

const ProductSlice = createSlice({
    name:'produt',
    initialState:product,
    reducers:{
        addProducts:(state , {payload})=>{
            const data = [...payload]
            return data
        }
    }
})

export const {addProducts} = ProductSlice.actions;
export default ProductSlice.reducer;