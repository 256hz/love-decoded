import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course2step11prompts: SurveyPrompt[] = [
	{
		prompt: 'How often did someone mistreat you by becoming disrespectful, argumentative, impatient, etc. with you today?',
		key: EndOfDaySurveys.Course2Step11Survey1,
	},
	{
		prompt: 'How often did you get angry but did not say anything about it?',
		key: EndOfDaySurveys.Course2Step11Survey2,
	},
	{
		prompt: 'How often did others take offense at you saying something about them mistreating you?',
		key: EndOfDaySurveys.Course2Step11Survey3,
	},
	{
		prompt: 'How often did you did you tell them nicely that its not acceptable, and they stopped?',
		key: EndOfDaySurveys.Course2Step11Survey4,
	},
	{
		prompt: 'How often did you think about using consequences to stop others from mistreating you? ',
		key: EndOfDaySurveys.Course2Step11Survey5,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course2step11prompts}
		title={titles.step10!}
	/>
);
