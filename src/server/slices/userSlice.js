import { createSlice } from "@reduxjs/toolkit";
import { registerUser, verifyAccount, loginUser, forgotPassword, resetPassword } from '../actions/userAction'

const initialState = {
    success: false,
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true // registration successful
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [verifyAccount.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [verifyAccount.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true // registration successful
        },
        [verifyAccount.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.loading = false
            state.userInfo = action.payload.data.user
            state.userToken = action.payload.data.accessToken
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
  });
  export default userSlice.reducer