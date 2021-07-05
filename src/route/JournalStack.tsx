import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RootScreen from '@screens/Courses/Tabs/Journal';
import JournalEditScreen from '@screens/Courses/Tabs/Journal/EditJournal';
import { CloseHeader2, DrawerHeader } from '@elements/Headers/Headers';
import { JournalScreens } from './enums';

const JournalStack = createStackNavigator();

export type JournalStackParamList = {
	[key in JournalScreens]: undefined;
};

export default ({ navigation }) => (
	<JournalStack.Navigator
		mode="card"
		headerMode="float"
		initialRouteName={JournalScreens.Root}
	>
		<JournalStack.Screen
			name={JournalScreens.Root}
			component={RootScreen}
			options={DrawerHeader(navigation)}
		/>

		<JournalStack.Screen
			name={JournalScreens.Edit}
			component={JournalEditScreen}
			options={CloseHeader2(navigation, ' ', () => navigation.navigate(JournalScreens.Root))}
		/>
	</JournalStack.Navigator>
);
