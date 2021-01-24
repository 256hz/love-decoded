import { createReducer } from '@reduxjs/toolkit';
import { setSurveyResponse } from '@redux/action';
import { Surveys } from 'redux/types/survey';

export type SurveyState = {
	[key in Surveys]?: string | string[] | number | number[];
};

const INITIAL_STATE: SurveyState = {};

export const survey = createReducer(INITIAL_STATE, reducer => {
	reducer
		.addCase(setSurveyResponse, (state, { payload: { title, response } }) => ({ ...state, [title]: response }));
});
