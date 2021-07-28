/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setCurrentRouteName } from '@redux/action';
import { navigationRef } from '@util/navigation';
import SplashScreen from '@screens/Splash';
import LoginScreen from '@screens/Courses/Common/Login';
import CongratulationsScreen from '@screens/Courses/Common/Congratulations';
import { RootStacks, Screens } from './enums';
import OnboardingStack from './OnboardingStack';
import HomeDrawer from './HomeDrawer';

type RootStackParamList = {
	[key in RootStacks]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
	const isLoggedIn = false; // replace with selector
	const destination = isLoggedIn ? RootStacks.HomeTabs : RootStacks.OnboardingStack;

	const dispatch = useDispatch();

	const onStateChange = (state: NavigationState | undefined) => {
		const { routes = [], index = 0 } = state || {};
		const { state: routesState } = routes[index] || {};
		const { routes: stateRoutes, index: stateIndex = 0 } = routesState || {};

		if (index && routes?.[index]?.name && stateRoutes?.[stateIndex]?.name) {
			dispatch(setCurrentRouteName(stateRoutes[stateIndex].name as Screens));
		}
	};

	return (
		<NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
			<Stack.Navigator
				initialRouteName={RootStacks.Splash}
				headerMode="none"
				mode="modal"
			>
				<Stack.Screen name={RootStacks.Splash}>
					{ props => <SplashScreen {...props} destination={destination} /> }
				</Stack.Screen>

				<Stack.Screen
					name={RootStacks.OnboardingStack}
					component={OnboardingStack}
				/>

				<Stack.Screen
					name={RootStacks.HomeTabs}
					component={HomeDrawer}
				/>

				{/* Has no tab bar, so must be at root level */}
				<Stack.Screen
					name={RootStacks.Congratulations}
					component={CongratulationsScreen}
				/>

				<Stack.Screen
					name={RootStacks.Login}
					component={LoginScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
