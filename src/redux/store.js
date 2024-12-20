import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/Fetch.js';

export const store = configureStore({
  weathers: weatherSlice,
});
