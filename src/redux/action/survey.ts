import { createAction } from '@reduxjs/toolkit';
import { NeffSurveyPageIndex, NeffSurveyResponse } from 'redux/types/survey';

export const setSurveyResponse = createAction('SET_SURVEY_RESPONSE',
	(title: string, response: string[] | string | number) => ({ payload: { title, response } }));

export const setNeffSurveyResponse = createAction('SET_NEFF_SURVEY_RESPONSE',
	(pageIndex: NeffSurveyPageIndex, response: NeffSurveyResponse) => ({ payload: { pageIndex, response } }));
