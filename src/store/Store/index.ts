import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../Feature/Slice';
import arraySlice from '../Feature/array';
import trendingSlice from '../Feature/Trending';

export const store = configureStore({
  reducer: {
    array: arraySlice,
    counter: counterSlice,
    treading: trendingSlice,
  },
});
