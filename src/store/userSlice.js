import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    userAvatar: '',
    IDPdata: {},
  },
  reducers: {
    setUserAvatar(state, action) {
      state.userAvatar = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setIDPdata(state, action) {
      state.IDPdata = action.payload;
    },
  },
});

export const { setUser, setUserAvatar, setIDPdata } = userSlice.actions;
export default userSlice.reducer;
