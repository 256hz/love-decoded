import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNames } from 'route/enums';
import { TabIcon } from '@elements/TabIcon';
import Journal from '@screens/Courses/Journal';
import Faq from '@screens/Courses/Faq';
import EmotionalReset from 'screens/Courses/Common/EmotionalReset';
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
				tabBarIcon: ({ focused }) => <TabIcon tabName={route.name as TabNames} selected={focused} />,
			})}
			tabBarOptions={{
				keyboardHidesTabBar: false,
				showLabel: false,
				style: styles.tabBar,
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
