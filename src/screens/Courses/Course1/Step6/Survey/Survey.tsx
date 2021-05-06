
import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course1step6prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you enter into a difficult communication today?',
		key: EndOfDaySurveys.Course1Step6Survey1,
	},
	{
		prompt: 'How many times did you bring in context – non-blame – doing your best - remembered the relationship is more important?',
		key: EndOfDaySurveys.Course1Step6Survey2,
	},
	{
		prompt: 'How many times did the other person react positively?',
		key: EndOfDaySurveys.Course1Step6Survey3,
	},
	{
		prompt: 'How many times negatively? Please journal about what you think did not work!',
		key: EndOfDaySurveys.Course1Step6Survey4,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course1step6prompts}
		title={titles.course1.step6}
	/>
);
