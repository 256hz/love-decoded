import { Course1Step1Screens, Course1Step2Screens } from './Steps/Course1Screens';

export enum RootStacks {
	Splash = 'Splash',
	HomeTabs = 'HomeTabs',
	OnboardingStack = 'OnboardingStack',
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

export enum CourseScreens {
	Home = 'Home',
	DayOverview = 'DayOverview',
	GoodJob = 'GoodJob',
	Congratulations = 'Congratulations',
}

export type Course1Screens = Course1Step1Screens |
Course1Step2Screens;

export type Screens = OnboardingScreens | CourseScreens | Course1Screens;

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
