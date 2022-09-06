import { configureStore } from '@reduxjs/toolkit';
import userReducer from './server/slices/userSlice';
import permissionSlice from './server/slices/permissionSlice';
import roleSlice from './server/slices/roleSlice';
import resourceSlice from './server/slices/resourceSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    permission: permissionSlice,
    role: roleSlice,
    resource: resourceSlice,
  }
})
export default store