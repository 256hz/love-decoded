import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingTop: 34,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 60,
	},
	text: {
		...text.body,
		fontSize: 20,
		lineHeight: 26,
	},
	highlightText: {
		...text.highlight,
	},
});
