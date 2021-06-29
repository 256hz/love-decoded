import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course2step13prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you feel upset with yourself today?',
		key: EndOfDaySurveys.Course2Step13Survey1,
	},
	{
		prompt: 'How times did you ask yourself for forgiveness?',
		key: EndOfDaySurveys.Course2Step13Survey2,
	},
	{
		prompt: 'How many times did you get upset with yourself, and say, “I messed up but I forgive myself ”?',
		key: EndOfDaySurveys.Course2Step13Survey3,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course2step13prompts}
		title={titles.step10!}
	/>
);
