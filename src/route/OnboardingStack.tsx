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
};

export default () => (
	<OnboardingStack.Navigator mode="card" headerMode="none" initialRouteName={Screens.Introduction}>
		<OnboardingStack.Screen name={Screens.Introduction} component={IntroductionScreen} />
		<OnboardingStack.Screen name={Screens.AcknowledgingYourPast} component={AcknowledgingYourPastScreen} />
		<OnboardingStack.Screen name={Screens.WhatWouldILikeToLearn} component={WhatWouldILikeToLearnScreen} />
		<OnboardingStack.Screen name={Screens.HavingTheLovingCommunities} component={HavingTheLovingCommunitiesScreen} />
		<OnboardingStack.Screen name={Screens.WhenYouForget} component={WhenYouForgetScreen} />
		<OnboardingStack.Screen name={Screens.TheScienceOfLove} component={TheScienceOfLoveScreen} />
		<OnboardingStack.Screen name={Screens.MasteringLove} component={MasteringLoveScreen} />
		<OnboardingStack.Screen name={Screens.FromComfort} component={FromComfortScreen} />
	</OnboardingStack.Navigator>
);
