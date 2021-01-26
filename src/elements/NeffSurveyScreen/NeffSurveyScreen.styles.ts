import { StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingTop: 34,
		paddingHorizontal: 60,
		marginBottom: 40,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingTop: 116,
		paddingHorizontal: 28,
	},
	text: {
		...text.body,
		fontSize: 19,
		lineHeight: 23,
		textAlign: 'center',
	},
	bold: {
		...text.body,
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '700',
	},
});
