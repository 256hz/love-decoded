/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// must be before React Native import
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
	Platform,
	StatusBar,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from 'route/RootStack';
import getStore from 'redux/getStore';
import Modals from '@elements/Modals';
import colors from 'elements/globalStyles/color';

export const { store, persistor } = getStore();

if (Platform.OS === 'android') {
	StatusBar.setBackgroundColor(colors.GrayTransparent028);
	StatusBar.setTranslucent(true);
}
export default class App extends Component {

	render() {

		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor()}>
					<SafeAreaProvider>
						<StatusBar barStyle="dark-content" />
						<RootStack />
						<Modals />
					</SafeAreaProvider>
				</PersistGate>
			</Provider>
		);
	}
}
