import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';

const contacts = (state: State) => (state || {}).contacts || {};

export const getContacts = createSelector(contacts, contactsState => contactsState);

export const getContactsArray = createSelector(getContacts, contactsState => Object.values(contactsState));
