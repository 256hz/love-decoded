import { createAction } from '@reduxjs/toolkit';
import { ModalContent, Modals } from '@redux/types/modal';

export const setModal = createAction('SET_MODAL',
	(modalType: Modals, content: ModalContent) => ({ payload: { modalType, content } }));

export const clearModal = createAction('CLEAR_MODAL',
	(modalType: Modals) => ({ payload: { modalType } }));
