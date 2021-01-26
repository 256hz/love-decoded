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
}

export type OnboardingStackParamList = {
	[Screens.Introduction]: undefined;
	[Screens.AcknowledgingYourPast]: undefined;
	[Screens.WhatWouldILikeToLearn]: undefined;
	[Screens.HavingTheLovingCommunities]: undefined;
	[Screens.WhenYouForget]: undefined
	[Screens.TheScienceOfLove]: undefined
	[Screens.FromComfort]: undefined
	[Screens.MasteringLove]: undefined
	[Screens.Control]: undefined
	[Screens.TheJourneyStartsNow]: undefined
	[Screens.SignupForm]: undefined
	[Screens.ThankYouForSigningUp]: undefined
	[Screens.LetTheAppTeachYou]: undefined
	[Screens.Dependency]: undefined
	[Screens.LoveVsHeartburn]: undefined
	[Screens.NavigatingTheStructure]: undefined
	[Screens.BornToBeLoved]: undefined
	[Screens.SetYourAlertsIntro]: undefined
	[Screens.SetYourAlerts]: undefined
	[Screens.SetYourAlertsThankYou]: undefined
	[Screens.HowCanITell]: undefined
	[Screens.NeffSurveyIntro]: undefined
};

export default () => (
	<OnboardingStack.Navigator mode="card" headerMode="none" initialRouteName={Screens.HowCanITell}>
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
	</OnboardingStack.Navigator>
);
