import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { Modals } from '@redux/types/modal';

const modal = (state: State) => (state || {}).modal || {};

export const getModalContentByType = (modalType: Modals) => createSelector(modal, modalState => modalState[modalType]);

export const getVisibleModals = () => createSelector(modal, ({ visibleModals }) => visibleModals);
