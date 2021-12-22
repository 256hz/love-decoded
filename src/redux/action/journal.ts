import { createAction } from '@reduxjs/toolkit';
import { DayNumber, StepNumber } from '@redux/types/user';

export const setJournal = createAction('SET_JOURNAL',
	(stepNumber: StepNumber, dayNumber: DayNumber, entry?: string, title?: string) => ({
		payload: {
			stepNumber,
			dayNumber,
			entry,
			title,
		},
	}));

export const syncJournals = createAction('SYNC_JOURNALS');
