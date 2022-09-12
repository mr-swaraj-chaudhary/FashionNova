import { createSlice } from "@reduxjs/toolkit"

// product actions
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false
    },
    reducers: {
        Start: (state) => {
            state.isFetching = true
        },
        Failure: (state) => {
            state.isFetching = false
            state.error = true
        },
        getProductsSuccess: (state, action) => {
            state.products = action.payload
            state.isFetching = false
            state.error = false
        },
        createProductSuccess: (state, action) => {
            state.products.push(action.payload)
            state.isFetching = false
            state.error = false
        },
        deleteProductSuccess: (state, action) => {
            state.products.splice(state.products.findIndex(item => item._id === action.payload), 1)
            state.isFetching = false
            state.error = false
        },
        updateProductSuccess: (state, action) => {
            state.products[state.products.findIndex(item => item._id === action.payload.productId)] = action.payload.product,
                state.isFetching = false,
                state.error = false
        }
    }
})

export const { Start, Failure, getProductsSuccess, createProductSuccess, deleteProductSuccess, updateProductSuccess } = productSlice.actions
export default productSlice.reducer