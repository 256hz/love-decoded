/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import SplashScreen from '@screens/Splash';
import { navigationRef } from '@util/navigation';
import { useDispatch } from 'react-redux';
import { setCurrentRouteName } from 'redux/action';
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

				<Stack.Screen
					name={RootStacks.Congratulations}
					component={CongratulationsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
