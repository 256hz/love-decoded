import React from 'react';
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


const App = () => {

	if (Platform.OS === 'android') {
		StatusBar.setBackgroundColor(colors.GrayTransparent028);
		StatusBar.setTranslucent(true);
	}
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor()}>
				<StatusBar barStyle="dark-content" />

				<SafeAreaProvider>
					<RootStack />
					<Modals />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;


