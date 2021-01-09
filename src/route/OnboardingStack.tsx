import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from '@screens/Onboarding/Introduction';

const OnboardingStack = createStackNavigator();

export enum Screens {
	Introduction = 'Introduction',
}

export default () => (
	<OnboardingStack.Navigator mode="card" headerMode="none" initialRouteName="Introduction">
		<OnboardingStack.Screen name="Introduction" component={IntroductionScreen} />
	</OnboardingStack.Navigator>
);
