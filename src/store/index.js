import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './taskSlice';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    task: taskReducer,
    modal: modalReducer,
  },
});
