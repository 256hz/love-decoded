import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import {
	Courses, Days, NeffSurveyPageIndex, Steps, Surveys,
} from 'redux/types/survey';

const survey = (state: State) => state.survey;

export const getOnboardingSurveyByTitle = (title: Surveys) => createSelector(survey,
	({ onboarding }) => onboarding[title]);

export const getNeffResponseByPageIndex = (pageIndex: NeffSurveyPageIndex) => createSelector(survey,
	({ onboarding }) => onboarding[Surveys.Neff][pageIndex]);

export const getNeffAverage = createSelector(survey,
	({ onboarding }) => (
		onboarding[Surveys.Neff]
			// eslint-disable-next-line no-param-reassign
			.reduce((acc, curr) => { acc += curr; return acc; }, 0) / onboarding[Surveys.Neff].length - 1
	).toFixed(2));

export const averageTwoNeffPageScores = (page1: number, page2: number) => createSelector(survey,
	({ onboarding }) => (onboarding[Surveys.Neff][page1] + onboarding[Surveys.Neff][page2]) / 2);

export const getAllSurveys = createSelector(survey, surveyState => surveyState);

export const getStepSurvey = (course: Courses, step: Steps, day: Days, title: string) => createSelector(survey,
	surveyState => surveyState[course][step][day][title]);
