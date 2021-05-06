
import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course1step2prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you hear your self-talk be unloving?',
		key: EndOfDaySurveys.Course1Step2Survey1,
	},
	{
		prompt: 'How many of those negative self-talks made you feel badly?',
		key: EndOfDaySurveys.Course1Step2Survey2,
	},
	{
		prompt: 'How many times did you replace it with a positive self-talk sentence?',
		key: EndOfDaySurveys.Course1Step2Survey3,
	},
	{
		prompt: 'How many positive replacement sentences did you write today?',
		key: EndOfDaySurveys.Course1Step2Survey4,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course1step2prompts}
		title={titles.course1.step2}
	/>
);
