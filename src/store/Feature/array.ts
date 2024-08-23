import { createSlice } from '@reduxjs/toolkit';

const arraySlice = createSlice({
  name: 'array',
  initialState: {
    myArray: 0,
  },
  reducers: {
    setMyArray: (state, action) => {
      state.myArray = action.payload;
    },
  },
});

export const { setMyArray } = arraySlice.actions;
export default arraySlice.reducer;
