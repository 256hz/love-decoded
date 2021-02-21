import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

import getStore from 'redux/getStore';
import OnboardingStack from 'route/OnboardingStack';
import Modals from '@elements/Modals';

export const { store, persistor } = getStore();

const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor()}>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer>
				<OnboardingStack />
				<Modals />
			</NavigationContainer>
		</PersistGate>
	</Provider>
);

export default App;
