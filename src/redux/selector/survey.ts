import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { NeffSurveyPageIndex, Surveys } from 'redux/types/survey';

const survey = (state: State) => (state || {}).survey || {};

const state = (stat: State) => stat;

export const getSurveyByTitle = (title: Surveys) => createSelector(survey, surveyState => surveyState[title]);

export const getNeffResponseByPageIndex = (pageIndex: NeffSurveyPageIndex) => createSelector(survey,
	surveyState => surveyState[Surveys.Neff][pageIndex]);

export const getAllSurveys = createSelector(state, surveyState => surveyState);
