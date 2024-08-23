import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    volume: 0,
  },
  reducers: {
    increment: (state) => {
      state.volume += 1;
    },
    decrement: (state) => {
      state.volume -= 1;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const { increment, decrement, setVolume } = counterSlice.actions;
export default counterSlice.reducer;
