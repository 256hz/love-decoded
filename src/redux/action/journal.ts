import { createAction } from '@reduxjs/toolkit';
import { DayNumber, StepNumber } from 'redux/types/user';

export const setJournal = createAction('SET_JOURNAL',
	(stepNumber: StepNumber, dayNumber: DayNumber, text?: string, title?: string) => ({
		payload: {
			stepNumber,
			dayNumber,
			text,
			title,
		},
	}));
