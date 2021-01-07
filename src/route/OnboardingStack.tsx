import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Introduction from '@screens/Onboarding/Introduction';

const OnboardingStack = createStackNavigator();

export default () => (
	<OnboardingStack.Navigator mode="card" headerMode="none" initialRouteName="Introduction">
		<OnboardingStack.Screen name="Introduction" component={Introduction} />
	</OnboardingStack.Navigator>
);
