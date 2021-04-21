import { StepCourses, Steps, Courses } from 'redux/types/survey';

type Titles = {
	[course in StepCourses]: {
		[step in Steps]: string;
	};
};

export const getTitle = (course: Courses, step: Steps) => titles[course][step];

export const titles: Titles = {
	[Courses.One]: {
		[Steps.One]: 'Discovering Your Lovable Qualities',
		[Steps.Two]: 'Learning to Self-Talk Positively',
		[Steps.Three]: 'Transforming My Unloving Behaviors',
		[Steps.Four]: '',
		[Steps.Five]: '',
		[Steps.Six]: '',
		[Steps.Seven]: '',
	},
	[Courses.Two]: {
		[Steps.One]: '',
		[Steps.Two]: '',
		[Steps.Three]: '',
		[Steps.Four]: '',
		[Steps.Five]: '',
		[Steps.Six]: '',
		[Steps.Seven]: '',
	},
	[Courses.Three]: {
		[Steps.One]: '',
		[Steps.Two]: '',
		[Steps.Three]: '',
		[Steps.Four]: '',
		[Steps.Five]: '',
		[Steps.Six]: '',
		[Steps.Seven]: '',
	},
};

export enum DailyActivity {
	Intention = 'Intention',
	Activities = 'Activities',
	Survey = 'Survey',
	Reflection = 'Reflection',
	NightlyReflection = 'Nightly Reflection',
}

export const ActivityFromNumber: DailyActivity[] = [
	DailyActivity.Intention, // empty
	DailyActivity.Intention,
	DailyActivity.Activities,
	DailyActivity.Survey,
	DailyActivity.Reflection,
];
