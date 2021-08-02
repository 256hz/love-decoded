import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import {
	Courses, Days, NeffSurveyPageIndex, Steps, Surveys,
} from '@redux/types/survey';

const survey = (state: State) => state.survey;

export const getOnboardingSurveyByTitle = (title: Surveys) => createSelector(survey,
	({ onboarding }) => onboarding[title]);

export const getNeffResponseByPageIndex = (pageIndex: NeffSurveyPageIndex) => createSelector(survey,
	({ onboarding }) => onboarding[Surveys.Neff][pageIndex]);

export const getNeffAverage = createSelector(survey,
	({ onboarding }) => (
		onboarding[Surveys.Neff]
			.reduce((acc, curr) => acc + curr, 0) / 12
	).toFixed(2));

export const averageTwoNeffPageScores = (page1: number, page2: number) => createSelector(survey,
	({ onboarding }) => ((onboarding[Surveys.Neff][page1] + onboarding[Surveys.Neff][page2]) / 2).toFixed(1));

export const getAllSurveys = createSelector(survey, surveyState => surveyState);

export const getDaySurvey = (course: Courses, step: Steps, day: Days, title: string) => createSelector(survey,
	surveyState => surveyState[course][step][day][title]);

export const getStepActivity = (course: Courses, step: Steps, title: string) => createSelector(survey,
	surveyState => surveyState[course][step][title]);
