import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { Surveys } from 'redux/types/survey';

const survey = (state: State) => (state || {}).survey || {};

export const getSurveyByTitle = (title: Surveys) => createSelector(survey, surveyState => surveyState[title]);

export const getAllSurveys = createSelector(survey, surveyState => surveyState);
