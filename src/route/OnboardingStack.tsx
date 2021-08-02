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
import { OnboardingScreens } from './enums';

const OnboardingStack = createStackNavigator();

export type OnboardingStackParamList = {
	[key in OnboardingScreens]: undefined;
};

export default () => (
	<OnboardingStack.Navigator mode="card" headerMode="none" initialRouteName={OnboardingScreens.Control}>
		<OnboardingStack.Screen name={OnboardingScreens.Introduction} component={IntroductionScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.AcknowledgingYourPast} component={AcknowledgingYourPastScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.WhatWouldILikeToLearn} component={WhatWouldILikeToLearnScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.HavingTheLovingCommunities} component={HavingTheLovingCommunitiesScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.WhenYouForget} component={WhenYouForgetScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.TheScienceOfLove} component={TheScienceOfLoveScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.MasteringLove} component={MasteringLoveScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.FromComfort} component={FromComfortScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.Control} component={ControlScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.TheJourneyStartsNow} component={TheJourneyStartsNowScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.SignupForm} component={SignupFormScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.ThankYouForSigningUp} component={ThankYouForSigningUpScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.LetTheAppTeachYou} component={LetTheAppTeachYouScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.Dependency} component={DependencyScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.LoveVsHeartburn} component={LoveVsHeartburnScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.NavigatingTheStructure} component={NavigatingTheStructureScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.BornToBeLoved} component={BornToBeLovedScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.SetYourAlertsIntro} component={SetYourAlertsIntroScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.SetYourAlerts} component={SetYourAlertsScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.SetYourAlertsThankYou} component={SetYourAlertsThankYouScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.HowCanITell} component={HowCanITellScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurveyIntro} component={NeffSurveyIntroScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey1} component={NeffSurvey1Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey2} component={NeffSurvey2Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey3} component={NeffSurvey3Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey4} component={NeffSurvey4Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey5} component={NeffSurvey5Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey6} component={NeffSurvey6Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey7} component={NeffSurvey7Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey8} component={NeffSurvey8Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey9} component={NeffSurvey9Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey10} component={NeffSurvey10Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey11} component={NeffSurvey11Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurvey12} component={NeffSurvey12Screen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurveyBreakdown} component={NeffSurveyBreakdownScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurveyThankYou} component={NeffSurveyThankYouScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.NeffSurveyGoodJob} component={NeffSurveyGoodJobScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.EmotionalResetButton} component={EmotionalResetButtonScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.BriefOverviewOfButtons} component={BriefOverviewOfButtonsScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.FrustratedReadyToQuit} component={FrustratedReadyToQuitScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.FrustratedWithApp} component={FrustratedWithAppScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.FrustratedWithProgress} component={FrustratedWithProgressScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.AddYourContacts} component={AddYourContactsScreen} />
		<OnboardingStack.Screen name={OnboardingScreens.YouAreReady} component={YouAreReadyScreen} />
	</OnboardingStack.Navigator>
);
