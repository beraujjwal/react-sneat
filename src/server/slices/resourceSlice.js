import { createSlice } from "@reduxjs/toolkit";
import { getAllResources, createResource, retrieveResource, updateResource, deleteResource } from '../actions/resourceAction'

const initialState = {
    success: false,
    loading: false,
    data: null,
    error: null,
}

const resourceSlice = createSlice({
    name: "resource",
    initialState,
    extraReducers: {
        [getAllResources.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [getAllResources.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [getAllResources.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [createResource.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [createResource.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [createResource.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [retrieveResource.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [retrieveResource.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [retrieveResource.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [updateResource.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [updateResource.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [updateResource.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [deleteResource.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [deleteResource.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.data = action.payload.data
        },
        [deleteResource.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
  });
  export default resourceSlice.reducer