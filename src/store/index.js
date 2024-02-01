import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./taskSlice";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
import iprReducer from "./allIprSlice";

export default configureStore({
  reducer: {
    task: taskReducer,
    modal: modalReducer,
    user: userReducer,
    allIpr: iprReducer,
  },
});
