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
	Root = 'Root',
	Progress = 'FrustratedWithProgress',
	App = 'FrustratedWithApp',
	Quit = 'FrustratedReadyToQuit',
}

export enum CourseCommonScreens {
	None = '',
}

export type Course1Screens = Course1Step1Screens
| Course1Step2Screens
| Course1Step3Screens
| Course1Step4Screens
| Course1Step5Screens
| Course1Step6Screens
| Course1Step7Screens;

export type Screens = OnboardingScreens
| CourseCommonScreens
| EmotionalResetScreens
| Course1Screens;

export enum StepStacks {
	Course1Step1 = 'Course1Step1',
	Course1Step2 = 'Course1Step2',
	Course1Step3 = 'Course1Step3',
	Course1Step4 = 'Course1Step4',
	Course1Step5 = 'Course1Step5',
	Course1Step6 = 'Course1Step6',
	Course1Step7 = 'Course1Step7',
	Course2Step1 = 'Course2Step1',
	Course2Step2 = 'Course2Step2',
	Course2Step3 = 'Course2Step3',
	Course2Step4 = 'Course2Step4',
	Course2Step5 = 'Course2Step5',
	Course2Step6 = 'Course2Step6',
	Course2Step7 = 'Course2Step7',
	Course3Step1 = 'Course3Step1',
	Course3Step2 = 'Course3Step2',
	Course3Step3 = 'Course3Step3',
	Course3Step4 = 'Course3Step4',
	Course3Step5 = 'Course3Step5',
	Course3Step6 = 'Course3Step6',
	Course3Step7 = 'Course1Step7',
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
};
