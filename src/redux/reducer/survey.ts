import { createReducer } from '@reduxjs/toolkit';
import { Courses, Surveys, SurveyState } from '@redux/types/survey';
import {
	setNeffSurveyResponse,
	setDaySurveyResponse,
	setOnboardingSurveyResponse,
	setStepActivityResponse,
	logOut,
} from '@redux/action';
import {
	course1Step1State,
	course1Step2State,
	course1Step3State,
	course1Step4State,
	course1Step5State,
	course1Step6State,
	course1Step7State,
	course2Step8State,
} from './initialSurveyStates';

// set initial values

const INITIAL_STATE: SurveyState = {
	onboarding: {
		// 12 responses (1-indexed)
		[Surveys.Neff]: new Array(13).fill(0),
	},
	course1: {
		step1: course1Step1State,
		step2: course1Step2State,
		step3: course1Step3State,
		step4: course1Step4State,
		step5: course1Step5State,
		step6: course1Step6State,
		step7: course1Step7State,
	},
	course2: {
		step8: course2Step8State,
	},
};

export const survey = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setOnboardingSurveyResponse, (state, { payload: { title, response } }) => ({
		...state,
		[Courses.Onboarding]: {
			...state[Courses.Onboarding],
			[title]: response,
		},
	}));

	addCase(setNeffSurveyResponse, (state, { payload: { pageIndex, response } }) => {
		const newResponses = [ ...state[Courses.Onboarding][Surveys.Neff] ];
		newResponses[pageIndex] = response;

		return {
			...state,
			[Courses.Onboarding]: {
				...state[Courses.Onboarding],
				[Surveys.Neff]: newResponses,
			},
		};
	});

	addCase(setStepActivityResponse, (state, { payload: { course, step, title, response } }) => ({
		...state,
		[course]: {
			...state[course],
			[step]: {
				...state[course][step],
				[title]: response,
			},
		},
	}));

	addCase(setDaySurveyResponse, (state, { payload: { course, step, day, title, response } }) => ({
		...state,
		[course]: {
			...state[course],
			[step]: {
				...state[course][step],
				[day]: {
					...state[course][step][day],
					[title]: response,
				},
			},
		},
	}));

	// disabled until backend integration
	// addCase(logOut, state => INITIAL_STATE);
});
