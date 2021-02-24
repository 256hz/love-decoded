import { Linking } from 'react-native';

export const openWebLink = (url: string) => {
	if (!url) {
		console.error('empty link');
		return;
	}

	if (!Linking.canOpenURL(url)) {
		console.error(`could not open URL: ${url}`);
		return;
	}

	Linking.openURL(url);
};
