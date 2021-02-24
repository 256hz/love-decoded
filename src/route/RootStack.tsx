import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'util/navigation';
import OnboardingStack from './OnboardingStack';

const Stack = createStackNavigator();

export default () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				initialRouteName="Onboarding"
				// screenOptions={screenOptions}
				headerMode="none"
				mode="modal"
			>
				<Stack.Screen
					name="Onboarding"
					component={OnboardingStack}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
