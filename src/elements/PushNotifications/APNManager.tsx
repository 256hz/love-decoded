/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-unused-vars */
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

const configure = () => {
	PushNotification.configure({
		// user accepted notification permission - register token
		onRegister: function (tokenData) {
			const { token } = tokenData;
			// handle device token
			// send token to server...
			// store in AsyncStorage...
		},
		// notification received / opened in-app event
		onNotification: function (notification) {
			notification.finish(PushNotificationIOS.FetchResult.NoData);
		},
		// outlining what permissions to accept
		permissions: {
			alert: true,
			badge: true,
			sound: true,
		},
	});
};
