
import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course1step5prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you base your communication on Awareness and Vision?',
		key: EndOfDaySurveys.Course1Step5Survey1,
	},
	{
		prompt: 'How many times did you say to yourself “The relationship is more important than who is right or wrong?”',
		key: EndOfDaySurveys.Course1Step5Survey2,
	},
	{
		prompt: 'How many times did communicating make the problem worse?',
		key: EndOfDaySurveys.Course1Step5Survey3,
	},
	{
		prompt: 'How many times did what you communicated resolve the problem?',
		key: EndOfDaySurveys.Course1Step5Survey4,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course1step5prompts}
		title={titles.course1.step1}
	/>
);
