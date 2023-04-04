import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const boxSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, deleteContacts, filterContact } = boxSlice.actions;
export const persistedReducer = persistReducer(persistConfig, boxSlice.reducer);
export const getContacts = state => state.contacts.contacts;
export const getFilterValue = state => state.contacts.filter;
