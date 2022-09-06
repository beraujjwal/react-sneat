import { createAsyncThunk } from "@reduxjs/toolkit";
import roleService from "../services/roleService";

export const getAllRoles = createAsyncThunk(
  "role/get-all",
  async (data, { rejectWithValue }) => {
    try {
      const res = await roleService.findAll();
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const createRole = createAsyncThunk(
  "role/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await roleService.createOne( data );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);

export const retrieveRole = createAsyncThunk(
  "role/get",
  async (id, { rejectWithValue }) => {
    try {
      const res = await roleService.retrieveOne( id );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);

export const updateRole = createAsyncThunk(
  "role/update",
  async ( id, data, { rejectWithValue } ) => {
    try {
      const res = await roleService.updateOne( id, data );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const deleteRole = createAsyncThunk(
  "role/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await roleService.removeOne( id );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);