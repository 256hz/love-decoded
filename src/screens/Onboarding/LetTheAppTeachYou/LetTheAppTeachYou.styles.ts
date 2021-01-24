import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingHorizontal: 150,
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
