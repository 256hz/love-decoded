import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabNames } from 'route/enums';
import { TabIcon } from '@elements/TabIcon';
import Journal from '@screens/Courses/Tabs/Journal';
import Faq from '@screens/Courses/Tabs/Faq';
import EmotionalReset from '@screens/Courses/Tabs/EmotionalReset';
import CourseStack from './Steps/CourseStack';
import styles from './HomeTabs.styles';

type TabParamList = {
	[key in TabNames]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default () => {
	return (
		<Tab.Navigator
			initialRouteName={TabNames.HomeScreen}
			lazy={false}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => (
					<TabIcon
						selected={focused}
						tabName={route.name as TabNames}
					/>
				),
			})}
			tabBarOptions={{
				keyboardHidesTabBar: false,
				showLabel: false,
				style: [
					styles.tabBar,
					// fix for notches on iOS breaking something about the tab bar safe area
					{ height: 75 + useSafeAreaInsets().bottom * 0.6 },
				],
			}}
		>
			<Tab.Screen
				name={TabNames.HomeScreen}
				component={CourseStack}
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
