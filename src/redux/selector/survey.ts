import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { NeffSurveyPageIndex, Surveys } from 'redux/types/survey';

const survey = (state: State) => (state || {}).survey || {};

export const getSurveyByTitle = (title: Surveys) => createSelector(survey, surveyState => surveyState[title]);

export const getNeffResponseByPageIndex = (pageIndex: NeffSurveyPageIndex) => createSelector(survey,
	surveyState => surveyState[Surveys.Neff][pageIndex]);

export const getNeffAverage = createSelector(survey,
	surveyState => (surveyState[Surveys.Neff]
		// eslint-disable-next-line no-param-reassign
		.reduce((acc, curr) => { acc += curr; return acc; }, 0) / surveyState[Surveys.Neff].length)
		.toFixed(2));

export const averageTwoNeffPageScores = (page1: number, page2: number) => createSelector(survey,
	surveyState => (surveyState[Surveys.Neff][page1] + surveyState[Surveys.Neff][page2]) / 2);

export const getAllSurveys = createSelector(survey, surveyState => surveyState);
