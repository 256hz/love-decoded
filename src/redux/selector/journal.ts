import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { DayNumber, StepNumber } from 'redux/types/user';

const journals = (state: State) => (state || {}).journals || {};

export const getJournal = (stepNumber: StepNumber, dayNumber: DayNumber) =>
	createSelector(journals, journalState => journalState[stepNumber]?.[dayNumber] || {});

export const getJournalHistory = createSelector(journals, ({ history }) => history || []);
