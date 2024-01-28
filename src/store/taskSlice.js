import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    isOpenTaskModal: false,
    isActive: 'task',
    tasks: [],
  },
  reducers: {
    openTaskModal(state) {
      state.isOpenTaskModal = true;
    },
    closeTaskModal(state) {
      state.isOpenTaskModal = false;
    },
    setIsActive(state, action) {
      state.isActive = action.payload;
    },
  },
});

export const { openTaskModal, closeTaskModal, setIsActive } = taskSlice.actions;
export default taskSlice.reducer;
