
import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course1step7prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you mirror people who criticized you?',
		key: EndOfDaySurveys.Course1Step7Survey1,
	},
	{
		prompt: 'How many times did you get a positive response?',
		key: EndOfDaySurveys.Course1Step7Survey2,
	},
	{
		prompt: 'How many times did people look at you confused?',
		key: EndOfDaySurveys.Course1Step7Survey3,
	},
	{
		prompt: 'How many times did you want to do it, but were afraid to?',
		key: EndOfDaySurveys.Course1Step7Survey4,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course1step7prompts}
		title={titles.step7}
	/>
);
