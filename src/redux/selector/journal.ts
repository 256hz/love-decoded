import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { DayNumber, StepNumber } from '@redux/types/user';
import { DayFromNumber, StepFromNumber } from '@redux/types/survey';

const journals = (state: State) => (state || {}).journals || {};

export const getJournal = (stepNumber: StepNumber, dayNumber: DayNumber) => {
	const step = StepFromNumber[stepNumber];
	const day = DayFromNumber[dayNumber];

	return createSelector(journals, journalState => journalState[step]?.[day] || { title: '', entry: '' });
};

export const getJournalHistory = createSelector(journals, ({ history }) => history || []);
