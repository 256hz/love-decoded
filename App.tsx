import React, { Component } from 'react';
// must be before React Native import
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
	Alert,
	Platform,
	StatusBar,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from 'route/RootStack';
import getStore from 'redux/getStore';
import Modals from '@elements/Modals';
import colors from 'elements/globalStyles/color';

const NotificationHub = require('react-native-azurenotificationhub/index.ios');

const connectionString = 'Endpoint=sb://love-decoded-ns-dev.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=lmdb+hII+jq08yaoH8baMvaMo2n/sUXY047P8dgt5sQ=';       // The Notification Hub connection string
const hubName = 'love-decoded-notification-hub-dev';                // The Notification Hub name
const tags = [ '' ];               // The set of tags to subscribe to.  See notes after code sample
const template = '';              // Notification hub templates:
const templateName = '';           // The template's name

let remoteNotificationsDeviceToken = '';  // The device token registered with APNS
export const { store, persistor } = getStore();
if (Platform.OS === 'android') {
	StatusBar.setBackgroundColor(colors.GrayTransparent028);
	StatusBar.setTranslucent(true);
}
export default class App extends Component {

	requestPermissions = () => {
		// register: Fired when the user registers for remote notifications. The
		// handler will be invoked with a hex string representing the deviceToken.
		NotificationHub.addEventListener('register', this._onRegistered);

		// registrationError: Fired when the user fails to register for remote
		// notifications. Typically occurs when APNS is having issues, or the device
		// is a simulator. The handler will be invoked with {message: string, code: number, details: any}.
		NotificationHub.addEventListener('registrationError', this._onRegistrationError);

		// registerAzureNotificationHub: Fired when registration with azure notification hubs successful
		// with object {success: true}
		NotificationHub.addEventListener('registerAzureNotificationHub', this._onAzureNotificationHubRegistered);

		// azureNotificationHubRegistrationError: Fired when registration with azure notification hubs
		// fails with object {message: string, details: any}
		NotificationHub.addEventListener('azureNotificationHubRegistrationError', this._onAzureNotificationHubRegistrationError);

		// notification: Fired when a remote notification is received. The
		// handler will be invoked with an instance of `AzureNotificationHubIOS`.
		NotificationHub.addEventListener('notification', this._onRemoteNotification);

		// localNotification: Fired when a local notification is received. The
		// handler will be invoked with an instance of `AzureNotificationHubIOS`.
		NotificationHub.addEventListener('localNotification', this._onLocalNotification);

		// Requests notification permissions from iOS, prompting the user's
		// dialog box. By default, it will request all notification permissions, but
		// a subset of these can be requested by passing a map of requested
		// permissions.
		// The following permissions are supported:
		//  - `alert`
		//  - `badge`
		//  - `sound`
		//
		// returns a promise that will resolve when the user accepts,
		// rejects, or if the permissions were previously rejected. The promise
		// resolves to the current state of the permission of
		// {alert: boolean, badge: boolean,sound: boolean }
		NotificationHub.requestPermissions()
			.then(console.log)
			.catch(console.warn);
	};

	register = () => {
		NotificationHub.register(remoteNotificationsDeviceToken, { connectionString, hubName, tags })
			.then(console.log)
			.catch(console.warn);
	};

	registerTemplate = () => {
		NotificationHub.registerTemplate(remoteNotificationsDeviceToken, { connectionString, hubName, tags, templateName, template })
			.then(console.log)
			.catch(console.warn);
	};

	unregister = () => {
		NotificationHub.unregister()
			.then(console.log)
			.catch(console.warn);
	};

	unregisterTemplate = () => {
		NotificationHub.unregisterTemplate(templateName)
			.then(console.log)
			.catch(console.warn);
	};

	_onRegistered = (deviceToken) => {
		remoteNotificationsDeviceToken = deviceToken;
		Alert.alert(
			'Registered For Remote Push',
			`Device Token: ${deviceToken}`,
			[ {
				text: 'Dismiss',
				onPress: () => {},
			} ],
		);
	};

	_onRegistrationError = (error) => {
		Alert.alert(
			'Failed To Register For Remote Push',
			`Error (${error.code}): ${error.message}`,
			[ {
				text: 'Dismiss',
				onPress: () => {},
			} ],
		);
	};

	_onRemoteNotification = (notification) => {
		Alert.alert(
			'Push Notification Received',
			`Alert message: ${  notification.getMessage()}`,
			[ {
				text: 'Dismiss',
				onPress: () => {},
			} ],
		);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_onAzureNotificationHubRegistered = (registrationInfo) => {
		Alert.alert('Registered For Azure notification hub',
			'Registered For Azure notification hub',
			[ {
				text: 'Dismiss',
				onPress: () => {},
			} ],
		);
	};

	_onAzureNotificationHubRegistrationError = (error) => {
		Alert.alert(
			'Failed To Register For Azure Notification Hub',
			`Error (${error.code}): ${error.message}`,
			[ {
				text: 'Dismiss',
				onPress: () => {},
			} ],
		);
	};

	_onLocalNotification = (notification) => {
		// Note notification will be object for iOS
		Alert.alert(
			'Local Notification Received',
			`Alert message: ${  notification.getMessage()}`,
			[ {
				text: 'Dismiss',
				onPress: () => {},
			} ],
		);
	};

	render() {
		this.requestPermissions;
		this.register;
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
