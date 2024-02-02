import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    allIDPdata: {},
    IDPdata: {},
  },
  reducers: {
    setUserAvatar(state, action) {
      state.userAvatar = action.payload;
    },
    setIDPdata(state, action) {
      state.IDPdata = action.payload;
    },
  },
});

export const { setUserAvatar, setIDPdata, changeStatusIpr } = userSlice.actions;
export default userSlice.reducer;
