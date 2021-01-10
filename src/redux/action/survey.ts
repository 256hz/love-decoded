import { createAction } from '@reduxjs/toolkit';

export const setSurveyResponse = createAction('SET_SURVEY_RESPONSE',
	(title: string, response: string[] | number) => ({ payload: { title, response } }));
