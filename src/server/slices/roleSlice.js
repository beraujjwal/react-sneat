import { createSlice } from "@reduxjs/toolkit";
import { getAllRoles, createRole, retrieveRole, updateRole, deleteRole } from '../actions/roleAction'

const initialState = {
    success: false,
    loading: false,
    data: null,
    error: null,
}

const roleSlice = createSlice({
    name: "role",
    initialState,
    extraReducers: {
        [getAllRoles.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [getAllRoles.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [getAllRoles.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [createRole.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [createRole.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [createRole.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [retrieveRole.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [retrieveRole.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [retrieveRole.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [updateRole.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [updateRole.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [updateRole.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [deleteRole.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [deleteRole.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [deleteRole.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
  });
  export default roleSlice.reducer