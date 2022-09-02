import { createSlice } from "@reduxjs/toolkit";
import { registerUser, verifyAccount, loginUser, forgotPassword, resetPassword } from '../actions/userAction'

const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [verifyAccount.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [verifyAccount.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [verifyAccount.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
  });
  export default userSlice.reducer