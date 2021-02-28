import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'util/navigation';
import OnboardingStack from './OnboardingStack';
import HomeTabs from './HomeTabs';
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
				initialRouteName={isLoggedIn ? RootScreens.Home : RootScreens.Onboarding}
				headerMode="none"
				mode="modal"
			>
				<Stack.Screen
					name={RootScreens.Onboarding}
					component={OnboardingStack}
				/>
				<Stack.Screen
					name={RootScreens.Home}
					component={HomeDrawer}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
