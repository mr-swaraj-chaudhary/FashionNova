import { createSlice } from "@reduxjs/toolkit"

// user actions
const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload
            state.isFetching = false
            state.error = false
        },
        logoutSuccess: (state) => {
            state.currentUser = null
            state.isFetching = false
            state.error = false
        }
    }
})

export const { loginStart, loginFailure, loginSuccess, logoutSuccess } = userSlice.actions
export default userSlice.reducer