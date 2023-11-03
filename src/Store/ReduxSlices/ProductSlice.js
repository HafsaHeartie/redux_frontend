import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../Pages/ProductData";

export const ProductSlice = createSlice ({
    name : 'Products',
    initialState : ProductData,
    reducers : {
        filterProduct (state , action) {
            const filterData = state.filter((pro) => pro.title.toLowerCase().includes(action.payload))
            console.log(filterData)
            return filterData
            
        },
    }
})
export const {filterProduct} = ProductSlice.actions

export default ProductSlice.reducer