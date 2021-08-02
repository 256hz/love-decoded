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
	course2Step9State,
	course2Step10State,
	course2Step11State,
	course2Step12State,
	course2Step13State,
	course2Step14State,
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
		step9: course2Step9State,
		step10: course2Step10State,
		step11: course2Step11State,
		step12: course2Step12State,
		step13: course2Step13State,
		step14: course2Step14State,
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

	addCase(logOut, state => INITIAL_STATE);
});
