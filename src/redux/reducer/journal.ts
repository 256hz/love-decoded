import { createReducer } from '@reduxjs/toolkit';
import { setJournal } from '@redux/action';
import {
	DayFromNumber,
	Days,
	StepFromNumber,
	Steps,
} from 'redux/types/survey';
import { DayNumber, StepNumber } from 'redux/types/user';

export type JournalState = {
	history: {
		stepNumber: StepNumber;
		dayNumber: DayNumber;
	}[]
} & {
	[step in Steps]?: {
		[day in Days]?: {
			title?: string;
			entry?: string;
		}
	}
};

const INITIAL_STATE: JournalState = {
	history: [],
};

export const journals = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setJournal, (state, { payload: { stepNumber, dayNumber, entry, title } }) => {
		const step = StepFromNumber[stepNumber];
		const day = DayFromNumber[dayNumber];

		// update journal history
		const newHistory = [
			{ stepNumber, dayNumber },
			...state.history
				.filter(journal => !(journal.dayNumber === dayNumber && journal.stepNumber === stepNumber))
				.slice(0, 9),
		];

		return {
			...state,
			history: newHistory,
			[step]: {
				...state[step],
				[day]: { entry, title },
			},
		};
	});
});
