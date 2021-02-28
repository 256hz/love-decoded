import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'util/navigation';
import { RootStacks } from './enums';
import OnboardingStack from './OnboardingStack';
import HomeDrawer from './HomeDrawer';

const Stack = createStackNavigator();

enum RootScreens {
	Home = 'HomeTab',
	Onboarding = 'Onboarding',
}

export default () => {
	const isLoggedIn = true; // replace with selector

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				initialRouteName={isLoggedIn ? RootStacks.HomeTabs : RootStacks.OnboardingStack}
				headerMode="none"
				mode="modal"
			>
				<Stack.Screen
					name={RootStacks.OnboardingStack}
					component={OnboardingStack}
				/>
				<Stack.Screen
					name={RootStacks.HomeTabs}
					component={HomeDrawer}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
