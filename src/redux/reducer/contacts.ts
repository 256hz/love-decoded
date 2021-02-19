import { createReducer } from '@reduxjs/toolkit';
import { Contact } from 'react-native-contacts';
import { setContact } from '@redux/action';

export type ContactsState = {
	[recordId: string]: Contact | undefined;
};

const INITIAL_STATE: ContactsState = {};

export const contacts = createReducer(INITIAL_STATE, reducer => {
	reducer
		.addCase(setContact, (state, { payload: { contact } }) => ({
			...state,
			[contact.recordID]: state[contact.recordID] ? undefined : contact,
		}));
});
