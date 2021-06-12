import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RootScreen from '@screens/Courses/Tabs/EmotionalReset';
import ReadyToQuitScreen from '@screens/Courses/Tabs/EmotionalReset/FrustratedReadyToQuit';
import WithAppScreen from '@screens/Courses/Tabs/EmotionalReset/FrustratedWithApp';
import WithProgressScreen from '@screens/Courses/Tabs/EmotionalReset/FrustratedWithProgress';
import { BackHeader, DrawerHeader } from '@elements/Headers/Headers';
import { EmotionalResetScreens } from './enums';

const EmotionalResetStack = createStackNavigator();

export type EmotionalResetStackParamList = {
	[key in EmotionalResetScreens]: undefined;
};

export default ({ navigation }) => (
	<EmotionalResetStack.Navigator
		mode="card"
		headerMode="float"
		initialRouteName={EmotionalResetScreens.Root}
	>
		<EmotionalResetStack.Screen
			name={EmotionalResetScreens.Root}
			component={RootScreen}
			options={DrawerHeader(navigation)}
		/>

		<EmotionalResetStack.Screen
			name={EmotionalResetScreens.Quit}
			component={ReadyToQuitScreen}
			options={BackHeader(navigation, EmotionalResetScreens.Root)}
		/>

		<EmotionalResetStack.Screen
			name={EmotionalResetScreens.App}
			component={WithAppScreen}
			options={BackHeader(navigation, EmotionalResetScreens.Root)}
		/>

		<EmotionalResetStack.Screen
			name={EmotionalResetScreens.Progress}
			component={WithProgressScreen}
			options={BackHeader(navigation, EmotionalResetScreens.Root)}
		/>
	</EmotionalResetStack.Navigator>
);
