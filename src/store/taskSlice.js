import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenTaskModal: false,
  isSaveSample: false,
  isEditTask: false,
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
      // Возвращаем начальное состояние
      return initialState;
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
  setTypeTaskModal,
  setIsNavItemActive,
  setDirSample,
  onSaveSample,
  onEditTask,
  offSaveSample,
  setTask,
} = taskSlice.actions;

export default taskSlice.reducer;
