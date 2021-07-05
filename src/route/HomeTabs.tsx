import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EmotionalResetStack from 'route/EmotionalResetStack';
import JournalStack from 'route/JournalStack';
import { TabNames } from 'route/enums';
import { TabIcon } from '@elements/TabIcon';
import Faq from '@screens/Courses/Tabs/Faq';
import CourseStack from './Steps/CourseStack';
import styles from './HomeTabs.styles';

type TabParamList = {
	[key in TabNames]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default () => {
	const screenOptions = ({ route }) => ({
		tabBarIcon: ({ focused }) => (
			<TabIcon
				selected={focused}
				tabName={route.name as TabNames}
			/>
		),
	});

	const tabBarOptions = {
		keyboardHidesTabBar: false,
		showLabel: false,
		style: [
			styles.tabBar,
			// fix for notches on iOS breaking something about the tab bar safe area
			{ height: 75 + useSafeAreaInsets().bottom * 0.6 },
		],
	};

	return (
		<Tab.Navigator
			initialRouteName={TabNames.HomeScreen}
			lazy={false}
			screenOptions={screenOptions}
			tabBarOptions={tabBarOptions}
		>
			<Tab.Screen
				name={TabNames.HomeScreen}
				component={CourseStack}
			/>

			<Tab.Screen
				name={TabNames.JournalScreen}
				component={JournalStack}
			/>

			<Tab.Screen
				name={TabNames.FAQScreen}
				component={Faq}
			/>

			<Tab.Screen
				name={TabNames.ResetScreen}
				component={EmotionalResetStack}
			/>
		</Tab.Navigator>
	);
};
