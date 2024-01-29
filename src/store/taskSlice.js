import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    isOpenTaskModal: false,
    isActive: 'task',
    isSaveSample: false,
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
    toggleSaveSample(state) {
      state.isSaveSample = !state.isSaveSample;
    },
  },
});

export const { openTaskModal, closeTaskModal, setIsActive, toggleSaveSample } =
  taskSlice.actions;
export default taskSlice.reducer;
