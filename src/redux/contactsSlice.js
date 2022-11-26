import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchContacts } from './operations';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [fetchContacts.rejected](state, {payload}) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;