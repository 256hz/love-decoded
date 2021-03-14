import { createAction } from '@reduxjs/toolkit';
import {
	Courses,
	Days,
	NeffSurveyPageIndex,
	NeffSurveyResponse,
	Steps,
	SurveyResponse,
} from 'redux/types/survey';

export const setOnboardingSurveyResponse = createAction('SET_ONBOARDING_SURVEY_RESPONSE',
	(title: string, response: SurveyResponse) => ({ payload: { title, response } }));

export const setStepSurveyResponse = createAction('SET_STEP_SURVEY_RESPONSE',
	(course: Courses, step: Steps, day: Days, title: string, response: SurveyResponse) => ({
		payload: { course, step, day, title, response },
	}));

export const setNeffSurveyResponse = createAction('SET_NEFF_SURVEY_RESPONSE',
	(pageIndex: NeffSurveyPageIndex, response: NeffSurveyResponse) => ({ payload: { pageIndex, response } }));
