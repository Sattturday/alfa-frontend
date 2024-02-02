import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenTaskModal: false,
  isSaveSample: false,
  isEditTask: false,
  isBack: false,
  typeTaskModal: '',
  isNavItemActive: 'primary',
  dirSample: {},
  task: {},
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    openTaskModal(state, action) {
      state.isOpenTaskModal = true;
      state.isNavItemActive = 'primary';
      state.typeTaskModal = action.payload;
    },
    closeTaskModal(state) {
      return initialState;
    },
    toggleIsBack(state) {
      state.isBack = !state.isBack;
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
    onEditTask(state) {
      state.isEditTask = !state.isEditTask;
    },
    offSaveSample(state) {
      state.isSaveSample = !state.isSaveSample;
      state.dirSample = {};
    },
    setTask(state, action) {
      state.task = action.payload;
    },
  },
});

export const {
  openTaskModal,
  closeTaskModal,
  toggleIsBack,
  setTypeTaskModal,
  setIsNavItemActive,
  setDirSample,
  onSaveSample,
  onEditTask,
  offSaveSample,
  setTask,
} = taskSlice.actions;

export default taskSlice.reducer;
