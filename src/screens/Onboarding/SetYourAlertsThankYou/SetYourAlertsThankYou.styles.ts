import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		...text.body,
		textAlign: 'center',
		fontSize: 19,
		lineHeight: 50,
	},
	bold: {
		fontWeight: '500',
	},
	headline: {
		fontWeight: '700',
	},
});
