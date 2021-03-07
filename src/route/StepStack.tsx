import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Steps/Home';
import { StepScreens } from './enums';

const StepStack = createStackNavigator();

export default () => (
	<StepStack.Navigator mode="card" headerMode="none" initialRouteName={StepScreens.Home}>
		<StepStack.Screen name={StepScreens.Home} component={HomeScreen} />
	</StepStack.Navigator>
);
