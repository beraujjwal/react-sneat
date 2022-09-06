import { createSlice } from "@reduxjs/toolkit";
import { getAllPermissions, createPermission, retrievePermission, updatePermission, deletePermission } from '../actions/permissionAction'

const initialState = {
    success: false,
    loading: false,
    data: null,
    error: null,
}

const permissionSlice = createSlice({
    name: "permission",
    initialState,
    extraReducers: {
        [getAllPermissions.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [getAllPermissions.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [getAllPermissions.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [createPermission.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [createPermission.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [createPermission.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [retrievePermission.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [retrievePermission.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [retrievePermission.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [updatePermission.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [updatePermission.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [updatePermission.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [deletePermission.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [deletePermission.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [deletePermission.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
  });
  export default permissionSlice.reducer