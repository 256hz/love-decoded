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
};

export default () => (
	<OnboardingStack.Navigator mode="card" headerMode="none" initialRouteName={Screens.LetTheAppTeachYou}>
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
	</OnboardingStack.Navigator>
);
