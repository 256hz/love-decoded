import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHeader, CloseHeader2, DrawerHeader } from '@elements/Headers/Headers';
import { DayNumber, StepNumber } from '@redux/types/user';

import RootScreen from '@screens/Courses/Tabs/Journal';
import JournalEditScreen from '@screens/Courses/Tabs/Journal/EditJournal';
import AllJournalsScreen from '@screens/Courses/Tabs/Journal/AllJournals';

import { JournalScreens } from './enums';

const JournalStack = createStackNavigator();

export type JournalStackParamList = {
	[JournalScreens.Root]: undefined;
	[JournalScreens.All]: undefined;
	[JournalScreens.Edit]: {
		stepNumber: StepNumber;
		dayNumber: DayNumber;
	};
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
			options={CloseHeader2(navigation, JournalScreens.Root)}
		/>

		<JournalStack.Screen
			name={JournalScreens.All}
			component={AllJournalsScreen}
			options={BackHeader(navigation, JournalScreens.Root)}
		/>
	</JournalStack.Navigator>
);
