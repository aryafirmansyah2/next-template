import { createSlice } from '@reduxjs/toolkit';

const trendingSlice = createSlice({
  name: 'trending',
  initialState: {
    time_window: 'day',
  },
  reducers: {
    setTimeWindow: (state, action) => {
      state.time_window = action.payload;
    },
  },
});

export const { setTimeWindow } = trendingSlice.actions;
export default trendingSlice.reducer;
