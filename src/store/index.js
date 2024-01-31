import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './taskSlice';
import modalReducer from './modalSlice';
import userReducer from './userSlice'

export default configureStore({
  reducer: {
    task: taskReducer,
    modal: modalReducer,
    user: userReducer,
  },
});
