import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from 'screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

const prompts: SurveyPrompt[] = [
	{
		prompt: 'How many lovable qualities did you write down today?',
		key: EndOfDaySurveys.Course1Step1Survey1,
	},
	{
		prompt: 'How many of your lovable qualities did you share with others?',
		key: EndOfDaySurveys.Course1Step1Survey2,
	},
	{
		prompt: 'How many of your lovable qualities can you now recite by memory?',
		key: EndOfDaySurveys.Course1Step1Survey3,
	},
	{
		prompt: 'How many times did you smile thinking about your loveable qualities?',
		key: EndOfDaySurveys.Course1Step1Survey4,
	},
	{
		prompt: 'How many times did you think it was silly?',
		key: EndOfDaySurveys.Course1Step1Survey5,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={prompts}
		title={titles.course1.step1}
	/>
);
