import { createSlice } from '@reduxjs/toolkit';

const IDPSlice = createSlice({
  name: 'idp',
  initialState: {
    allIDPdata: [],
    IDPdata: {},
  },
  reducers: {
    setAllIDPdata(state, action) {
      state.allIDPdata = action.payload;
    },
    setIDPdata(state, action) {
      state.IDPdata = action.payload;
    },
  },
});

export const { setAllIDPdata, setIDPdata } = IDPSlice.actions;
export default IDPSlice.reducer;
