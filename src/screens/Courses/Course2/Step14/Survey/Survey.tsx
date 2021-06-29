import React from 'react';
import { EndOfDaySurveys } from '@redux/types/survey';
import SurveyScreen, { SurveyPrompt } from '@screens/Courses/Common/SurveyScreen/SurveyScreen';
import { titles } from '@util/titles';

export const course2step14prompts: SurveyPrompt[] = [
	{
		prompt: 'How many times did you have thoughts about something someone did that hurt you?',
		key: EndOfDaySurveys.Course2Step14Survey1,
	},
	{
		prompt: 'How many times did you think they probably did their best, and were just clueless as to the fact that it really hurt you?',
		key: EndOfDaySurveys.Course2Step14Survey2,
	},
	{
		prompt: 'How many times did you put your feelings away in a drawer and think they were gone, only to have them pop up again and again?',
		key: EndOfDaySurveys.Course2Step14Survey3,
	},
	{
		prompt: 'How many times did you think you want to forgive someone and write them a letter or talk to them?',
		key: EndOfDaySurveys.Course2Step14Survey4,
	},
];

export default ({ navigation }) => (
	<SurveyScreen
		navigation={navigation}
		prompts={course2step14prompts}
		title={titles.step14!}
	/>
);
