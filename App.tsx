import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootStack from 'route/RootStack';
import getStore from 'redux/getStore';
import Modals from '@elements/Modals';

export const { store, persistor } = getStore();

const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor()}>
			<StatusBar barStyle="dark-content" />
			<RootStack />
			<Modals />
		</PersistGate>
	</Provider>
);

export default App;
