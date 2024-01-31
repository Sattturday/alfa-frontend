import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    iprStatus: "cancel", //active-обычное состояние ИПР, cancel-отменена, no-отстутствует
  },
  reducers: {
    changeStatusIpr(state, action) {
      state.iprStatus = action.payload;
    },
  },
});

export const { changeStatusIpr } = userSlice.actions;
export default userSlice.reducer;
