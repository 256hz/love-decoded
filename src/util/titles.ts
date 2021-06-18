import { Steps, Courses } from 'redux/types/survey';

type Titles = {
	[step in Steps]: string;
};

export const getTitle = (course: Courses, step: Steps) => titles[course][step];

export const titles: Titles = {
	[Steps.One]: 'Discovering Your Lovable Qualities',
	[Steps.Two]: 'Learning to Self-Talk Positively',
	[Steps.Three]: 'Transforming My Unloving Behaviors',
	[Steps.Four]: 'Creating Effective Personal Visions',
	[Steps.Five]: 'Effective Communication',
	[Steps.Six]: 'Contexts Necessary for Framing Communications',
	[Steps.Seven]: 'Learn Mirroring - Indispensable For Listening to Problems',
	[Steps.Eight]: 'Integrating “...Because I Love Myself” Into Life',
	[Steps.Nine]: 'Ways You Mis-Treat Yourself?',
	[Steps.Ten]: '',
	[Steps.Eleven]: '',
	[Steps.Twelve]: '',
	[Steps.Thirteen]: '',
	[Steps.Fourteen]: '',
	[Steps.Fifteen]: '',
	[Steps.Sixteen]: '',
	[Steps.Seventeen]: '',
	[Steps.Eighteen]: '',
	[Steps.Nineteen]: '',
	[Steps.Twenty]: '',
	[Steps.Twentyone]: '',
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
