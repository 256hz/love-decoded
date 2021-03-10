import { createReducer } from '@reduxjs/toolkit';
import { setNeffSurveyResponse, setSurveyResponse } from '@redux/action';
import { Surveys, SurveyState } from 'redux/types/survey';

const INITIAL_STATE: SurveyState = {
	// The Neff survey has 12 responses, and is one-indexed here (index 0 is unused).
	// This makes page indexes 1:1 to responses.  I.e. NeffSurvey1's response will be in getNeffSurveyResponseByPageIndex(1).
	[Surveys.Neff]: new Array(13).fill(0),
};

export const survey = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setNeffSurveyResponse, (state, { payload: { pageIndex, response } }) => {
		const currentResponses = [ ...state[Surveys.Neff] ];
		currentResponses[pageIndex] = response;

		return {
			...state,
			[Surveys.Neff]: currentResponses,
		};
	});
	addCase(setSurveyResponse, (state, { payload: { title, response } }) => ({ ...state, [title]: response }));
});
