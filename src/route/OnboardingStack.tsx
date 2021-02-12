import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IntroductionScreen from '@screens/Onboarding/Introduction';
import AcknowledgingYourPastScreen from '@screens/Onboarding/AcknowledgingYourPast';
import WhatWouldILikeToLearnScreen from '@screens/Onboarding/WhatWouldILikeToLearn';
import HavingTheLovingCommunitiesScreen from '@screens/Onboarding/HavingTheLovingCommunities';
import WhenYouForgetScreen from '@screens/Onboarding/WhenYouForget';
import TheScienceOfLoveScreen from '@screens/Onboarding/TheScienceOfLove';
import FromComfortScreen from '@screens/Onboarding/FromComfort';
import MasteringLoveScreen from '@screens/Onboarding/MasteringLove';
import ControlScreen from '@screens/Onboarding/Control';
import TheJourneyStartsNowScreen from '@screens/Onboarding/TheJourneyStartsNow';
import SignupFormScreen from '@screens/Onboarding/SignupForm';
import ThankYouForSigningUpScreen from '@screens/Onboarding/ThankYouForSigningUp';
import LetTheAppTeachYouScreen from '@screens/Onboarding/LetTheAppTeachYou';
import LoveVsHeartburnScreen from '@screens/Onboarding/LoveVsHeartburn';
import DependencyScreen from '@screens/Onboarding/Dependency';
import NavigatingTheStructureScreen from '@screens/Onboarding/NavigatingTheStructure';
import BornToBeLovedScreen from '@screens/Onboarding/BornToBeLoved';
import SetYourAlertsIntroScreen from '@screens/Onboarding/SetYourAlertsIntro';
import SetYourAlertsScreen from '@screens/Onboarding/SetYourAlerts';
import SetYourAlertsThankYouScreen from '@screens/Onboarding/SetYourAlertsThankYou';
import HowCanITellScreen from '@screens/Onboarding/HowCanITell';
import NeffSurveyIntroScreen from '@screens/Onboarding/NeffSurveyIntro';
import {
	NeffSurvey1Screen,
	NeffSurvey2Screen,
	NeffSurvey3Screen,
	NeffSurvey4Screen,
	NeffSurvey5Screen,
	NeffSurvey6Screen,
	NeffSurvey7Screen,
	NeffSurvey8Screen,
	NeffSurvey9Screen,
	NeffSurvey10Screen,
	NeffSurvey11Screen,
	NeffSurvey12Screen,
} from '@screens/Onboarding/NeffSurvey';
import NeffSurveyThankYouScreen from '@screens/Onboarding/NeffSurveyThankYou';
import NeffSurveyBreakdownScreen from '@screens/Onboarding/NeffSurveyBreakdown';
import NeffSurveyGoodJobScreen from '@screens/Onboarding/NeffSurveyGoodJob';
import {
	EmotionalResetButtonScreen,
	FrustratedWithProgressScreen,
	FrustratedWithAppScreen,
	FrustratedReadyToQuitScreen,
} from '@screens/Onboarding/EmotionalResetButton';
import BriefOverviewOfButtonsScreen from '@screens/Onboarding/BriefOverviewOfButtons';
import AddYourContactsScreen from '@screens/Onboarding/AddYourContacts';
import YouAreReadyScreen from '@screens/Onboarding/YouAreReady';

const OnboardingStack = createStackNavigator();

export enum Screens {
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

export type OnboardingStackParamList = {
	[key in Screens]: undefined;
	// [Screens.Introduction]: undefined;
	// [Screens.AcknowledgingYourPast]: undefined;
	// [Screens.WhatWouldILikeToLearn]: undefined;
	// [Screens.HavingTheLovingCommunities]: undefined;
	// [Screens.WhenYouForget]: undefined;
	// [Screens.TheScienceOfLove]: undefined;
	// [Screens.FromComfort]: undefined;
	// [Screens.MasteringLove]: undefined;
	// [Screens.Control]: undefined;
	// [Screens.TheJourneyStartsNow]: undefined;
	// [Screens.SignupForm]: undefined;
	// [Screens.ThankYouForSigningUp]: undefined;
	// [Screens.LetTheAppTeachYou]: undefined;
	// [Screens.Dependency]: undefined;
	// [Screens.LoveVsHeartburn]: undefined;
	// [Screens.NavigatingTheStructure]: undefined;
	// [Screens.BornToBeLoved]: undefined;
	// [Screens.SetYourAlertsIntro]: undefined;
	// [Screens.SetYourAlerts]: undefined;
	// [Screens.SetYourAlertsThankYou]: undefined;
	// [Screens.HowCanITell]: undefined;
	// [Screens.NeffSurveyIntro]: undefined;
	// [Screens.NeffSurvey1]: undefined;
	// [Screens.NeffSurvey2]: undefined;
	// [Screens.NeffSurvey3]: undefined;
	// [Screens.NeffSurvey4]: undefined;
	// [Screens.NeffSurvey5]: undefined;
	// [Screens.NeffSurvey6]: undefined;
	// [Screens.NeffSurvey7]: undefined;
	// [Screens.NeffSurvey8]: undefined;
	// [Screens.NeffSurvey9]: undefined;
	// [Screens.NeffSurvey10]: undefined;
	// [Screens.NeffSurvey11]: undefined;
	// [Screens.NeffSurvey12]: undefined;
	// [Screens.NeffSurveyGoodJob]: undefined;
	// [Screens.NeffSurveyBreakdown]: undefined;
	// [Screens.NeffSurveyThankYou]: undefined;
	// [Screens.EmotionalResetButton]: undefined;
	// [Screens.BriefOverviewOfButtons]: undefined;
	// [Screens.FrustratedReadyToQuit]: undefined;
	// [Screens.FrustratedWithApp]: undefined;
	// [Screens.FrustratedWithProgress]: undefined;
	// [Screens.AddYourContacts]: undefined
};

export default () => (
	<OnboardingStack.Navigator mode="card" headerMode="none" initialRouteName={Screens.AddYourContacts}>
		<OnboardingStack.Screen name={Screens.Introduction} component={IntroductionScreen} />
		<OnboardingStack.Screen name={Screens.AcknowledgingYourPast} component={AcknowledgingYourPastScreen} />
		<OnboardingStack.Screen name={Screens.WhatWouldILikeToLearn} component={WhatWouldILikeToLearnScreen} />
		<OnboardingStack.Screen name={Screens.HavingTheLovingCommunities} component={HavingTheLovingCommunitiesScreen} />
		<OnboardingStack.Screen name={Screens.WhenYouForget} component={WhenYouForgetScreen} />
		<OnboardingStack.Screen name={Screens.TheScienceOfLove} component={TheScienceOfLoveScreen} />
		<OnboardingStack.Screen name={Screens.MasteringLove} component={MasteringLoveScreen} />
		<OnboardingStack.Screen name={Screens.FromComfort} component={FromComfortScreen} />
		<OnboardingStack.Screen name={Screens.Control} component={ControlScreen} />
		<OnboardingStack.Screen name={Screens.TheJourneyStartsNow} component={TheJourneyStartsNowScreen} />
		<OnboardingStack.Screen name={Screens.SignupForm} component={SignupFormScreen} />
		<OnboardingStack.Screen name={Screens.ThankYouForSigningUp} component={ThankYouForSigningUpScreen} />
		<OnboardingStack.Screen name={Screens.LetTheAppTeachYou} component={LetTheAppTeachYouScreen} />
		<OnboardingStack.Screen name={Screens.Dependency} component={DependencyScreen} />
		<OnboardingStack.Screen name={Screens.LoveVsHeartburn} component={LoveVsHeartburnScreen} />
		<OnboardingStack.Screen name={Screens.NavigatingTheStructure} component={NavigatingTheStructureScreen} />
		<OnboardingStack.Screen name={Screens.BornToBeLoved} component={BornToBeLovedScreen} />
		<OnboardingStack.Screen name={Screens.SetYourAlertsIntro} component={SetYourAlertsIntroScreen} />
		<OnboardingStack.Screen name={Screens.SetYourAlerts} component={SetYourAlertsScreen} />
		<OnboardingStack.Screen name={Screens.SetYourAlertsThankYou} component={SetYourAlertsThankYouScreen} />
		<OnboardingStack.Screen name={Screens.HowCanITell} component={HowCanITellScreen} />
		<OnboardingStack.Screen name={Screens.NeffSurveyIntro} component={NeffSurveyIntroScreen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey1} component={NeffSurvey1Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey2} component={NeffSurvey2Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey3} component={NeffSurvey3Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey4} component={NeffSurvey4Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey5} component={NeffSurvey5Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey6} component={NeffSurvey6Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey7} component={NeffSurvey7Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey8} component={NeffSurvey8Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey9} component={NeffSurvey9Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey10} component={NeffSurvey10Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey11} component={NeffSurvey11Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurvey12} component={NeffSurvey12Screen} />
		<OnboardingStack.Screen name={Screens.NeffSurveyBreakdown} component={NeffSurveyBreakdownScreen} />
		<OnboardingStack.Screen name={Screens.NeffSurveyThankYou} component={NeffSurveyThankYouScreen} />
		<OnboardingStack.Screen name={Screens.NeffSurveyGoodJob} component={NeffSurveyGoodJobScreen} />
		<OnboardingStack.Screen name={Screens.EmotionalResetButton} component={EmotionalResetButtonScreen} />
		<OnboardingStack.Screen name={Screens.BriefOverviewOfButtons} component={BriefOverviewOfButtonsScreen} />
		<OnboardingStack.Screen name={Screens.FrustratedReadyToQuit} component={FrustratedReadyToQuitScreen} />
		<OnboardingStack.Screen name={Screens.FrustratedWithApp} component={FrustratedWithAppScreen} />
		<OnboardingStack.Screen name={Screens.FrustratedWithProgress} component={FrustratedWithProgressScreen} />
		<OnboardingStack.Screen name={Screens.AddYourContacts} component={AddYourContactsScreen} />
		<OnboardingStack.Screen name={Screens.YouAreReady} component={YouAreReadyScreen} />
	</OnboardingStack.Navigator>
);
