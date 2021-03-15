import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNames } from 'route/enums';
import { TabIcon } from '@elements/TabIcon';
import Journal from '@screens/Steps/Journal';
import Faq from '@screens/Steps/Faq';
import EmotionalReset from '@screens/Steps/EmotionalReset';
import StepStack from './StepStack';
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
					<TabIcon tabName={route.name as TabNames} selected={focused} />
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
