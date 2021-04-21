import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingTop: 35,
	},
	container: {
		flex: 1,
		paddingTop: 23,
	},
	text: {
		...text.body,
		fontSize: 19,
		lineHeight: 58,
		textAlign: 'center',
	},
});
