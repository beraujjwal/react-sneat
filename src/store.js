import { configureStore } from '@reduxjs/toolkit';
import userReducer from './server/slices/userSlice';
import permissionSlice from './server/slices/permissionSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    permission: permissionSlice,
  }
})
export default store