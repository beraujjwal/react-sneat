import { createAsyncThunk } from "@reduxjs/toolkit";
import resourceService from "../services/resourceService";

export const getAllResources = createAsyncThunk(
  "resource/get-all",
  async (data, { rejectWithValue }) => {
    try {
      const res = await resourceService.findAll();
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const createResource = createAsyncThunk(
  "resource/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await resourceService.createOne( data );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);

export const retrieveResource = createAsyncThunk(
  "resource/get",
  async (id, { rejectWithValue }) => {
    try {
      const res = await resourceService.retrieveOne( id );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);

export const updateResource = createAsyncThunk(
  "resource/update",
  async ( id, data, { rejectWithValue } ) => {
    try {
      const res = await resourceService.updateOne( id, data );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const deleteResource = createAsyncThunk(
  "resource/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await resourceService.removeOne( id );
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }    
  }
);