import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './boxSlice';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: '',
  },
});

export const persistor = persistStore(store);
