import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	subtitleContainer: {
	},
	text: {
		...text.body,
		fontSize: 14,
		marginBottom: 8,
	},
	textInput: {
		flex: 1,
		backgroundColor: colors.GrayF3,
		borderRadius: 11,
		overflow: 'hidden',
		marginBottom: 24,
	},
});
