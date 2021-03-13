import React, { useEffect, useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabIcon } from '@elements/TabIcon';
import Journal from 'screens/Steps/Journal';
import Faq from 'screens/Steps/Faq';
import EmotionalReset from 'screens/Steps/EmotionalReset';
import { EmitterSubscription, Keyboard, Platform } from 'react-native';
import StepStack from './StepStack';
import styles from './HomeTabs.styles';

export enum TabNames {
	HomeScreen = 'Home',
	JournalScreen = 'Journal',
	FAQScreen = 'FAQ',
	ResetScreen = 'Emotional Reset',
}

type TabParamList = {
	[key in TabNames]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default () => {
	const visible = useTabBarVisibility();

	return (
		<Tab.Navigator
			initialRouteName={TabNames.HomeScreen}
			lazy={false}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => (
					<TabIcon
						tabName={route.name as TabNames}
						selected={focused}
					/>
				),
			})}
			tabBarOptions={{
				keyboardHidesTabBar: Platform.select({ android: true }),
				showLabel: false,
				style: [ styles.tabBar, !visible && { width: 0, height: 0 } ],
			}}
		>
			<Tab.Screen
				name={TabNames.HomeScreen}
				component={StepStack}
			/>
			<Tab.Screen
				name={TabNames.JournalScreen}
				component={Journal}
			/>
			<Tab.Screen
				name={TabNames.FAQScreen}
				component={Faq}
			/>
			<Tab.Screen
				name={TabNames.ResetScreen}
				component={EmotionalReset}
			/>
		</Tab.Navigator>
	);
};

const useTabBarVisibility = () => {
	const [ visible, setVisible ] = useState(true);
	const keyboardEventListeners = useRef<EmitterSubscription[]>([]);

	useEffect(() => {
		const listeners = keyboardEventListeners.current;

		if (Platform.OS === 'android') {
			listeners?.push(
				Keyboard.addListener('keyboardDidShow', () =>
					setVisible(false),
				),
			);
			listeners?.push(
				Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
			);
		}

		return () => listeners && listeners.forEach((event) => event.remove());
	}, []);

	return visible;
};
