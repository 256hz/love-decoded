import { createReducer } from '@reduxjs/toolkit';
import { setNeffSurveyResponse, setSurveyResponse } from '@redux/action';
import { Surveys, SurveyState } from 'redux/types/survey';

const INITIAL_STATE: SurveyState = {
	// The Neff survey has 12 responses, and is one-indexed here (the first one is left blank).
	// This is to make it easy to map questions/page indexes to responses.
	[Surveys.Neff]: new Array(13).fill(0),
};

export const survey = createReducer(INITIAL_STATE, reducer => {
	reducer
		.addCase(setNeffSurveyResponse, (state, { payload: { pageIndex, response } }) => {
			const currentResponses = [ ...state[Surveys.Neff] ];
			currentResponses[pageIndex] = response;

			return {
				...state,
				[Surveys.Neff]: currentResponses,
			};
		})
		.addCase(setSurveyResponse, (state, { payload: { title, response } }) => ({ ...state, [title]: response }));
});
