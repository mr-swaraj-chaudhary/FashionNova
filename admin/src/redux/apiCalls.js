import { loginStart, loginFailure, loginSuccess, logoutSuccess } from './userRedux'
import { Start, Failure, getProductsSuccess, createProductSuccess, deleteProductSuccess, updateProductSuccess } from './productRedux'
import { publicRequests, userRequests } from '../requests'

// user login actions
export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const response = await publicRequests.post("/account/login/", user)
        if (response.data.isAdmin) {
            dispatch(loginSuccess(response.data))
            return true
        } else {
            dispatch(loginFailure())
            return false
        }
    } catch (error) {
        dispatch(loginFailure())
        return false
    }
}

// user logout actions
export const logout = async (dispatch) => {
    dispatch(logoutSuccess())
    localStorage.clear()
}

// product actions
export const getProducts = async (dispatch) => {
    dispatch(Start())
    try {
        const response = await userRequests.get("/products/")
        dispatch(getProductsSuccess(response.data))
    } catch (error) {
        dispatch(Failure())
    }
}

export const createProduct = async (dispatch, product) => {
    dispatch(Start())
    try {
        const response = await userRequests.post("/products/create", product)
        dispatch(createProductSuccess(response.data))
    } catch (error) {
        dispatch(Failure())
    }
}

export const deleteProduct = async (dispatch, productId) => {
    dispatch(Start())
    try {
        await userRequests.delete(`/products/delete/${productId}`)
        dispatch(deleteProductSuccess(productId))
    } catch (error) {
        dispatch(Failure())
    }
}

export const updateProduct = async (dispatch, productId, product) => {
    dispatch(Start())
    try {
        await userRequests.put(`/products/update/${productId}`)
        dispatch(updateProductSuccess({productId, product}))
    } catch (error) {
        dispatch(Failure())
    }
}