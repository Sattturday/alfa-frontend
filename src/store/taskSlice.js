import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    isOpenTaskModal: false,
    isActive: 'task',
    isSaveSample: false,
    dirSample: {},
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
    setDirSample(state, action) {
      state.dirSample = action.payload;
    },
    onSaveSample(state) {
      state.isSaveSample = !state.isSaveSample;
    },
    offSaveSample(state) {
      state.isSaveSample = !state.isSaveSample;
      state.dirSample = {};
    },
  },
});

export const {
  openTaskModal,
  closeTaskModal,
  setIsActive,
  setDirSample,
  onSaveSample,
  offSaveSample,
} = taskSlice.actions;
export default taskSlice.reducer;
