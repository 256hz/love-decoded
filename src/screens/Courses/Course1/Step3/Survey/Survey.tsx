
import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course1step3prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you use an unloving behavior toward yourself?',
		key: EndOfDaySurveys.Course1Step3Survey1,
	},
	{
		prompt: 'How many times did you transform it to a positive statement?',
		key: EndOfDaySurveys.Course1Step3Survey2,
	},
	{
		prompt: 'How many sentences did you write down with “...I like myself"?',
		key: EndOfDaySurveys.Course1Step3Survey3,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course1step3prompts}
		title={titles.step3}
	/>
);
