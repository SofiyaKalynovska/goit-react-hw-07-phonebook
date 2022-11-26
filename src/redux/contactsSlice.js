import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getAction = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    }).addCase(addContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
    }).addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.contacts.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    }).addMatcher(isAnyOf(...getAction("pending")), state => {
      state.isLoading = true;
    }).addMatcher(isAnyOf(...getAction("rejected")), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }).addMatcher(isAnyOf(...getAction("fulfilled")), state => {
      state.isLoading = false;
      state.error = null;
    })
  },
});


export const contactsReducer = contactsSlice.reducer;