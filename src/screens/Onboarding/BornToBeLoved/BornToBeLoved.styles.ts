import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingTop: 116,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 60,
	},
	text: {
		...text.body,
		fontSize: 18,
		lineHeight: 30,
	},
	highlightText: {
		...text.highlight,
	},
});
