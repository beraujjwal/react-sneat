import { createAsyncThunk } from "@reduxjs/toolkit";
import permissionService from "../services/permissionService";

export const getAllPermissions = createAsyncThunk(
  "permission/get-all",
  async (data, { rejectWithValue }) => {
    try {
      const res = await permissionService.findAll();
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const createPermission = createAsyncThunk(
  "permission/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await permissionService.createOne( data );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);

export const retrievePermission = createAsyncThunk(
  "permission/get",
  async (id, { rejectWithValue }) => {
    try {
      const res = await permissionService.retrieveOne( id );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);

export const updatePermission = createAsyncThunk(
  "permission/update",
  async ( id, data, { rejectWithValue } ) => {
    try {
      const res = await permissionService.updateOne( id, data );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const deletePermission = createAsyncThunk(
  "permission/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await permissionService.removeOne( id );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);