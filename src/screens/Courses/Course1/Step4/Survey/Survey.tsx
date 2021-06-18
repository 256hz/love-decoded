
import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course1step4prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you react, instead of envisioning the result you wanted, first?',
		key: EndOfDaySurveys.Course1Step4Survey1,
	},
	{
		prompt: 'How many times did you initiate aware, vision-compatible behaviors, before reacting?',
		key: EndOfDaySurveys.Course1Step4Survey2,
	},
	{
		prompt: 'How many times did you ask yourself, “Am I working toward my goal or countering it?”',
		key: EndOfDaySurveys.Course1Step4Survey3,
	},
	{
		prompt: 'How many times did you regret acting without first creating a vision?',
		key: EndOfDaySurveys.Course1Step4Survey4,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course1step4prompts}
		title={titles.step4}
	/>
);
