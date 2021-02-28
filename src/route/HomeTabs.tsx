import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabIcon } from 'elements';
import Journal from 'screens/Steps/Journal';
import Faq from 'screens/Steps/Faq';
import EmotionalReset from 'screens/Steps/EmotionalReset';
import StepStack from './StepStack';
import styles from './HomeTabs.styles';

const Tab = createBottomTabNavigator();

export enum TabNames {
	HomeScreen = 'Home',
	JournalScreen = 'Journal',
	FAQScreen = 'FAQ',
	ResetScreen = 'Emotional Reset',
}

export default () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeScreen"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => (
					<TabIcon
						tabName={route.name as TabNames}
						selected={focused}
					/>
				),
			})}
			tabBarOptions={{
				keyboardHidesTabBar: true,
				showLabel: false,
				style: styles.tabBar,
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
