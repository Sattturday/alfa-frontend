import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    isOpenTaskModal: false,
    isSaveSample: false,
    typeTaskModal: '',
    isNavItemActive: 'primary',
    dirSample: {},
  },
  reducers: {
    openTaskModal(state) {
      state.isOpenTaskModal = true;
      state.isNavItemActive = 'primary';
    },
    closeTaskModal(state) {
      state.isOpenTaskModal = false;
      state.isNavItemActive = '';
    },
    setTypeTaskModal(state, action) {
      state.typeTaskModal = action.payload;
    },
    setIsNavItemActive(state, action) {
      state.isNavItemActive = action.payload;
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
  setTypeTaskModal,
  setIsNavItemActive,
  setDirSample,
  onSaveSample,
  offSaveSample,
} = taskSlice.actions;
export default taskSlice.reducer;
