import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

export const registerUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await userService.registerUser(data);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const verifyAccount = createAsyncThunk(
  "user/verify",
  async ({ userId, token, data }) => {
    const res = await userService.verifyAccount( userId, token, data );
    return res.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await userService.loginUser( data );
      localStorage.setItem('userToken', res.data.data.accessToken);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgot-password",
  async ( data ) => {
    const res = await userService.forgotPassword( data );
    return res.data;
  }
);

export const resetPassword = createAsyncThunk(
  "user/reset-password",
  async ({ userId, token, data }) => {
    const res = await userService.resetPassword( userId, token, data );
    return res.data;
  }
);