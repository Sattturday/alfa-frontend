import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShowPopup: false,
    isClickButtonOk: false,
    isActive: "cancel",
    dataInfo: {
      title: "",
      description: "",
      leftButtonText: "",
      rightButtonText: "",
    },
  },
  reducers: {
    openConfirmPopup(state) {
      state.isShowPopup = true;
    },
    closeConfirmPopup(state) {
      state.isShowPopup = false;
    },
    clickButtonOk(state) {
      state.isClickButtonOk = true;
    },
    toggleClickButtonOk(state) {
      state.isClickButtonOk = false;
    },
    setIsActive(state, action) {
      state.isActive = action.payload;
    },
    setDataInfo(state, action) {
      state.dataInfo = action.payload;
    },
  },
});

export const {
  openConfirmPopup,
  closeConfirmPopup,
  clickButtonOk,
  toggleClickButtonOk,
  setIsActive,
  setDataInfo,
} = modalSlice.actions;

export default modalSlice.reducer;
