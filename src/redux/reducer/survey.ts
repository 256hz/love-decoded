import { createReducer } from '@reduxjs/toolkit';
import { setNeffSurveyResponse, setStepSurveyResponse, setOnboardingSurveyResponse } from '@redux/action';
import {
	Activities,
	Course1Step1,
	Course1Step2,
	Courses,
	DayValues,
	Surveys,
	SurveyState,
} from 'redux/types/survey';

// initial values
const course1Step1State = {};
const course1Step2State = {};

DayValues.forEach(day => {
	course1Step1State[day] = {
		[Surveys.HowAreYouFeeling]: 1,
		[Activities.LovableQualitiesSelf]: '',
		[Activities.LovableQualitiesOthersMissing]: '',
		[Activities.LovableQualitiesOthersDoNotAgree]: '',
	};

	course1Step2State[day] = {
		[Surveys.HowAreYouFeeling]: 1,
		[Activities.SelfTalkPositivelySituations]: '',
		[Activities.SelfTalkPositivelyReaction]: '',
		[Activities.SelfTalkPositivelyRevision]: '',
	};
});

const INITIAL_STATE: SurveyState = {
	onboarding: {
		// 12 responses (1-indexed)
		[Surveys.Neff]: new Array(13).fill(0),
	},
	course1: {
		step1: course1Step1State as Course1Step1,
		step2: course1Step2State as Course1Step2,
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
		const currentResponses = [ ...state[Surveys.Neff] ];
		currentResponses[pageIndex] = response;

		return {
			...state,
			[Surveys.Neff]: currentResponses,
		};
	});

	addCase(setStepSurveyResponse, (state, { payload: { course, step, day, title, response } }) => ({
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
});
