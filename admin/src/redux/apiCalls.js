import { loginStart, loginFailure, loginSuccess, logoutSuccess } from './userRedux'
import { Start, Failure, getProductsSuccess, createProductSuccess, deleteProductSuccess, updateProductSuccess } from './productRedux'
import { publicRequests, userRequests } from '../requests'

// user actions
export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const response = await publicRequests.post("/account/login/", user)
        if (response.data.isAdmin) {
            dispatch(loginSuccess(response.data))
        } else {
            dispatch(loginFailure())
        }
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutSuccess())
}

// product actions
export const getProducts = async (dispatch) => {
    dispatch(Start())
    try {
        const response = await publicRequests.get("/products/")
        dispatch(getProductsSuccess(response.data))
    } catch (error) {
        dispatch(Failure())
    }
}

export const createProduct = async (dispatch, product) => {
    dispatch(Start())
    try {
        const response = await userRequests.post("/products/create/", product)
        dispatch(createProductSuccess(response.data))
    } catch (error) {
        dispatch(Failure())
    }
}

export const deleteProduct = async (dispatch, productId) => {
    dispatch(Start())
    try {
        const response = await userRequests.delete(`/products/delete/${productId}`)
        dispatch(deleteProductSuccess(productId))
    } catch (error) {
        dispatch(Failure())
    }
}

export const updateProduct = async (dispatch, productId, product) => {
    dispatch(Start())
    try {
        const response = await userRequests.put(`/products/delete/${productId}`)
        dispatch(deleteProductSuccess({productId, product}))
    } catch (error) {
        dispatch(Failure())
    }
}