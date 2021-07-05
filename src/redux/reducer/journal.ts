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
			text?: string;
		}
	}
};

const INITIAL_STATE: JournalState = {
	history: [],
};

export const alerts = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setJournal, (state, { payload: { stepNumber, dayNumber, text, title } }) => {
		const step = StepFromNumber[stepNumber];
		const day = DayFromNumber[dayNumber];

		// update journal history
		state.history.unshift({ stepNumber, dayNumber });

		return {
			...state,
			history: state.history.slice(0, 10),
			[step]: {
				...state[step],
				[day]: { text, title },
			},
		};
	});
});
