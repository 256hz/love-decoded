import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingTop: 34,
	},
	container: {
		flex: 1,
		paddingTop: 55,
	},
	text: {
		...text.body,
		fontSize: 19,
		lineHeight: 58,
		textAlign: 'center',
	},
});
