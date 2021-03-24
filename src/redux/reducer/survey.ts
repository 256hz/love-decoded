import { createReducer } from '@reduxjs/toolkit';
import {
	setNeffSurveyResponse, setDaySurveyResponse, setOnboardingSurveyResponse, setStepActivityResponse, logOut,
} from '@redux/action';
import {
	Activities,
	Course1Step1,
	Course1Step2,
	Courses,
	DayValues,
	Surveys,
	SurveyState,
} from 'redux/types/survey';

// set initial values
const course1Step1State = {
	[Activities.LovableQualitiesSelf]: '',
	[Activities.LovableQualitiesOthersMissing]: '',
	[Activities.LovableQualitiesOthersDoNotAgree]: '',
};
const course1Step2State = {
	[Activities.SelfTalkPositivelySituations]: '',
	[Activities.SelfTalkPositivelyReaction]: '',
	[Activities.SelfTalkPositivelyRevision]: '',
};

DayValues.forEach(day => {
	course1Step1State[day] = {
		[Surveys.HowAreYouFeeling]: 1,
		[Surveys.LovableQualitiesWriteDown]: '',
		[Surveys.LovableQualitiesRecite]: '',
		[Surveys.LovableQualitiesShare]: '',
		[Surveys.LovableQualitiesSmile]: '',
		[Surveys.LovableQualitiesSilly]: '',
	};
	course1Step2State[day] = {
		[Surveys.HowAreYouFeeling]: 1,
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
		const newResponses = [ ...state[Courses.Onboarding][Surveys.Neff] ];
		newResponses[pageIndex] = response;
		console.log(newResponses);

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
