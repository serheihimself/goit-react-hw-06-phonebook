import { createSlice } from '@reduxjs/toolkit';

export const boxSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: (state, action) => state.push(action.payload),
  },
  deleteContacts: (state, action) => {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
});

export const { addContacts, deleteContacts } = boxSlice.actions;
