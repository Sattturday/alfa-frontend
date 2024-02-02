import { configureStore } from '@reduxjs/toolkit';

import { authApi } from '../api/authApi';
import { userApi } from '../api/userApi';
import taskReducer from './taskSlice';
import modalReducer from './modalSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    task: taskReducer,
    modal: modalReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});
