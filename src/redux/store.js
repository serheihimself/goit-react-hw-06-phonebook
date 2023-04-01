import { configureStore } from '@reduxjs/toolkit';
import { boxSlice } from './boxSlice';

export const store = configureStore({
  reducer: {
    contacts: boxSlice.reducer,
    filter: '',
  },
});
