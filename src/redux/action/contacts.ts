import { createAction } from '@reduxjs/toolkit';
import { Contact } from 'react-native-contacts';

export const setContact = createAction('SET_CONTACT',
	(contact: Contact) => ({ payload: { contact } }));
