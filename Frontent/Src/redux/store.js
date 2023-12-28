import { configureStore } from "@reduxjs/toolkit"
import { ProductReducer } from "../redux/reduces/productReducers"




export const store = configureStore({
    reducer:{
        product: ProductReducer
    }
})




