import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from '@screens/Onboarding/Introduction';
import AcknowledgingYourPastScreen from '@screens/Onboarding/AcknowledgingYourPast';
import WhatWouldILikeToLearnScreen from '@screens/Onboarding/WhatWouldILikeToLearn';

const OnboardingStack = createStackNavigator();

export enum Screens {
	Introduction = 'Introduction',
	AcknowledgingYourPast = 'AcknowledgingYourPast',
	WhatWouldILikeToLearn = 'WhatWouldILikeToLearn',
}

export type OnboardingStackParamList = {
	[Screens.Introduction]: undefined;
	[Screens.AcknowledgingYourPast]: undefined;
	[Screens.WhatWouldILikeToLearn]: undefined;
};

export default () => (
	<OnboardingStack.Navigator mode="card" headerMode="none" initialRouteName={Screens.Introduction}>
		<OnboardingStack.Screen name={Screens.Introduction} component={IntroductionScreen} />
		<OnboardingStack.Screen name={Screens.AcknowledgingYourPast} component={AcknowledgingYourPastScreen} />
		<OnboardingStack.Screen name={Screens.WhatWouldILikeToLearn} component={WhatWouldILikeToLearnScreen} />
	</OnboardingStack.Navigator>
);
