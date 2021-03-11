import { StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';

export default StyleSheet.create({
	titleContainer: {
		padding: 23,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 18,
		textAlign: 'left',
		marginBottom: 14,
	},
	subtitleText: {
		...text.body,
		fontSize: 17,
		textAlign: 'left',
		marginBottom: 27,
	},
});
