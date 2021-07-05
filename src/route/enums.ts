import { Courses, Steps } from '@redux/types/survey';
import {
	Course1Step1Screens,
	Course1Step2Screens,
	Course1Step3Screens,
	Course1Step4Screens,
	Course1Step5Screens,
	Course1Step6Screens,
	Course1Step7Screens,
} from './Steps/Course1Screens';
import {
	Course2Step8Screens,
	Course2Step9Screens,
	Course2Step10Screens,
	Course2Step11Screens,
	Course2Step12Screens,
	Course2Step13Screens,
	Course2Step14Screens,
} from './Steps/Course2Screens';

export enum RootStacks {
	Splash = 'Splash',
	HomeTabs = 'HomeTabs',
	OnboardingStack = 'OnboardingStack',
	Congratulations = 'Congratulations',
}

export enum OnboardingScreens {
	Introduction = 'Introduction',
	AcknowledgingYourPast = 'AcknowledgingYourPast',
	WhatWouldILikeToLearn = 'WhatWouldILikeToLearn',
	HavingTheLovingCommunities = 'HavingTheLovingCommunities',
	WhenYouForget = 'WhenYouForget',
	TheScienceOfLove = 'TheScienceOfLove',
	MasteringLove = 'MasteringLove',
	FromComfort = 'FromComfort',
	Control = 'Control',
	TheJourneyStartsNow = 'TheJourneyStartsNow',
	SignupForm = 'SignupForm',
	ThankYouForSigningUp = 'ThankYouForSigningUp',
	LetTheAppTeachYou = 'LetTheAppTeachYou',
	Dependency = 'Dependency',
	LoveVsHeartburn = 'LoveVsHeartburn',
	NavigatingTheStructure = 'NavigatingTheStructure',
	BornToBeLoved = 'BornToBeLoved',
	SetYourAlertsIntro = 'SetYourAlertsIntro',
	SetYourAlerts = 'SetYourAlerts',
	SetYourAlertsThankYou = 'SetYourAlertsThankYou',
	HowCanITell = 'HowCanITell',
	NeffSurveyIntro = 'NeffSurveyIntro',
	NeffSurvey1 = 'NeffSurvey1',
	NeffSurvey2 = 'NeffSurvey2',
	NeffSurvey3 = 'NeffSurvey3',
	NeffSurvey4 = 'NeffSurvey4',
	NeffSurvey5 = 'NeffSurvey5',
	NeffSurvey6 = 'NeffSurvey6',
	NeffSurvey7 = 'NeffSurvey7',
	NeffSurvey8 = 'NeffSurvey8',
	NeffSurvey9 = 'NeffSurvey9',
	NeffSurvey10 = 'NeffSurvey10',
	NeffSurvey11 = 'NeffSurvey11',
	NeffSurvey12 = 'NeffSurvey12',
	NeffSurveyBreakdown = 'NeffSurveyBreakdown',
	NeffSurveyThankYou = 'NeffSurveyThankYou',
	NeffSurveyGoodJob = 'NeffSurveyGoodJob',
	EmotionalResetButton = 'EmotionalResetButton',
	FrustratedReadyToQuit = 'FrustratedReadyToQuit',
	FrustratedWithApp = 'FrustratedWithApp',
	FrustratedWithProgress = 'FrustratedWithProgress',
	BriefOverviewOfButtons = 'BriefOverviewOfButtons',
	AddYourContacts = 'AddYourContacts',
	YouAreReady = 'YouAreReady',
}

export enum TabNames {
	HomeScreen = 'Home',
	JournalScreen = 'Journal',
	FAQScreen = 'FAQ',
	ResetScreen = 'Emotional Reset',
}

export enum EmotionalResetScreens {
	Root = 'EmotionalResetRoot',
	Progress = 'EmotionalResetFrustratedWithProgress',
	App = 'EmotionalResetFrustratedWithApp',
	Quit = 'EmotionalResetFrustratedReadyToQuit',
}

export enum JournalScreens {
	Root = 'JournalRoot',
	Edit = 'JournalEdit',
}

export enum CourseCommonScreens {
	None = '',
}

export type CourseScreens = Course1Step1Screens
| Course1Step2Screens
| Course1Step3Screens
| Course1Step4Screens
| Course1Step5Screens
| Course1Step6Screens
| Course1Step7Screens
| Course2Step8Screens
| Course2Step9Screens
| Course2Step10Screens
| Course2Step11Screens
| Course2Step12Screens
| Course2Step13Screens
| Course2Step14Screens;


export type Screens = OnboardingScreens
| CourseCommonScreens
| EmotionalResetScreens
| CourseScreens;

export enum StepStacks {
	Course1Step1 = 'Course1Step1',
	Course1Step2 = 'Course1Step2',
	Course1Step3 = 'Course1Step3',
	Course1Step4 = 'Course1Step4',
	Course1Step5 = 'Course1Step5',
	Course1Step6 = 'Course1Step6',
	Course1Step7 = 'Course1Step7',
	Course2Step8 = 'Course2Step8',
	Course2Step9 = 'Course2Step9',
	Course2Step10 = 'Course2Step10',
	Course2Step11 = 'Course2Step11',
	Course2Step12 = 'Course2Step12',
	Course2Step13 = 'Course2Step13',
	Course2Step14 = 'Course2Step14',
	Course3Step15 = 'Course3Step15',
	Course3Step16 = 'Course3Step16',
	Course3Step17 = 'Course3Step17',
	Course3Step18 = 'Course3Step18',
	Course3Step19 = 'Course3Step19',
	Course3Step20 = 'Course3Step20',
	Course3Step21 = 'Course1Step21',
}

type StepEntryPoints = {
	[course in Courses]?: {
		[step in Steps]?: StepStacks;
	}
};

export const stepEntryPoints: StepEntryPoints = {
	[Courses.One]: {
		[Steps.One]: StepStacks.Course1Step1,
		[Steps.Two]: StepStacks.Course1Step2,
		[Steps.Three]: StepStacks.Course1Step3,
		[Steps.Four]: StepStacks.Course1Step4,
		[Steps.Five]: StepStacks.Course1Step5,
		[Steps.Six]: StepStacks.Course1Step6,
		[Steps.Seven]: StepStacks.Course1Step7,
	},
	[Courses.Two]: {
		[Steps.Eight]: StepStacks.Course2Step8,
		[Steps.Nine]: StepStacks.Course2Step9,
		[Steps.Ten]: StepStacks.Course2Step10,
		[Steps.Eleven]: StepStacks.Course2Step11,
		[Steps.Twelve]: StepStacks.Course2Step12,
		[Steps.Thirteen]: StepStacks.Course2Step13,
		[Steps.Fourteen]: StepStacks.Course2Step14,
	},
};

export const stepHomeScreen = {
	[Courses.One]: {
		[Steps.One]: Course1Step1Screens.Home,
		[Steps.Two]: Course1Step2Screens.Home,
		[Steps.Three]: Course1Step3Screens.Home,
		[Steps.Four]: Course1Step4Screens.Home,
		[Steps.Five]: Course1Step5Screens.Home,
		[Steps.Six]: Course1Step6Screens.Home,
		[Steps.Seven]: Course1Step7Screens.Home,
	},
	[Courses.Two]: {
		[Steps.Eight]: Course2Step8Screens.Home,
		[Steps.Nine]: Course2Step9Screens.Home,
		[Steps.Ten]: Course2Step10Screens.Home,
		[Steps.Eleven]: Course2Step11Screens.Home,
		[Steps.Twelve]: Course2Step12Screens.Home,
		[Steps.Thirteen]: Course2Step13Screens.Home,
		[Steps.Fourteen]: Course2Step14Screens.Home,
	},
};

export const stepDayOverviewScreen = {
	[Courses.One]: {
		[Steps.One]: Course1Step1Screens.DayOverview,
		[Steps.Two]: Course1Step2Screens.DayOverview,
		[Steps.Three]: Course1Step3Screens.DayOverview,
		[Steps.Four]: Course1Step4Screens.DayOverview,
		[Steps.Five]: Course1Step5Screens.DayOverview,
		[Steps.Six]: Course1Step6Screens.DayOverview,
		[Steps.Seven]: Course1Step7Screens.DayOverview,
	},
	[Courses.Two]: {
		[Steps.Eight]: Course2Step8Screens.DayOverview,
		[Steps.Nine]: Course2Step9Screens.DayOverview,
		[Steps.Ten]: Course2Step10Screens.DayOverview,
		[Steps.Eleven]: Course2Step11Screens.DayOverview,
		[Steps.Twelve]: Course2Step12Screens.DayOverview,
		[Steps.Thirteen]: Course2Step13Screens.DayOverview,
		[Steps.Fourteen]: Course2Step14Screens.DayOverview,
	},
};

export const stepGoodJobScreen = {
	[Courses.One]: {
		[Steps.One]: Course1Step1Screens.GoodJob,
		[Steps.Two]: Course1Step2Screens.GoodJob,
		[Steps.Three]: Course1Step3Screens.GoodJob,
		[Steps.Four]: Course1Step4Screens.GoodJob,
		[Steps.Five]: Course1Step5Screens.GoodJob,
		[Steps.Six]: Course1Step6Screens.GoodJob,
		[Steps.Seven]: Course1Step7Screens.GoodJob,
	},
	[Courses.Two]: {
		[Steps.Eight]: Course2Step8Screens.GoodJob,
		[Steps.Nine]: Course2Step9Screens.GoodJob,
		[Steps.Ten]: Course2Step10Screens.GoodJob,
		[Steps.Eleven]: Course2Step11Screens.GoodJob,
		[Steps.Twelve]: Course2Step12Screens.GoodJob,
		[Steps.Thirteen]: Course2Step13Screens.GoodJob,
		[Steps.Fourteen]: Course2Step14Screens.GoodJob,
	},
};
