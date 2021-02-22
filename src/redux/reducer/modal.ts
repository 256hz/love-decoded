import { createReducer } from '@reduxjs/toolkit';
import { ModalContent, Modals } from '@redux/types/modal';
import { clearModal, setModal } from '@redux/action';

export interface ModalState {
	[Modals.CardContacts]?: ModalContent;
	visibleModals: Modals[];
}

const INITIAL_STATE: ModalState = {
	visibleModals: [],
};

export const modal = createReducer(INITIAL_STATE, reducer => {
	reducer
		.addCase(setModal, (state, { payload: { modalType, content } }) => ({
			...state,
			[modalType]: content,
			visibleModals: [
				...state.visibleModals,
				modalType,
			],
		}))
		.addCase(clearModal, (state, { payload: { modalType } }) => ({
			...state,
			[modalType]: undefined,
			visibleModals: state.visibleModals.filter(visibleModal => visibleModal !== modalType),
		}))
	;
});
