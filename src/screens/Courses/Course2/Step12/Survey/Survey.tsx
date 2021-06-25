import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course2step12prompts: SurveyPrompt[] = [
	{
		prompt: 'How often did you self-sabotage?',
		key: EndOfDaySurveys.Course2Step12Survey1,
	},
	{
		prompt: 'How often did you procrastination?',
		key: EndOfDaySurveys.Course2Step12Survey2,
	},
	{
		prompt: 'How often did you  experience feeling down?',
		key: EndOfDaySurveys.Course2Step12Survey3,
	},
	{
		prompt: 'How often did you make excuses?',
		key: EndOfDaySurveys.Course2Step12Survey4,
	},
	{
		prompt: 'How often did you blaming others?',
		key: EndOfDaySurveys.Course2Step12Survey5,
	},
	{
		prompt: 'How often did you consciously let go of the resentment?		',
		key: EndOfDaySurveys.Course2Step12Survey6,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course2step12prompts}
		title={titles.step12!}
	/>
);
