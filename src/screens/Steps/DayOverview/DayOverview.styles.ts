import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 17,
		lineHeight: 21,
	},
	progressText: {
		...text.body,
		fontSize: 14,
		lineHeight: 20,
	},
});
