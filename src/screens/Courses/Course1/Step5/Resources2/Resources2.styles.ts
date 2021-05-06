import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	subtitleContainer: {
		marginBottom: 24,
	},
	text: {
		...text.body,
		fontSize: 14,
	},
	textInput: {
		flex: 1,
		backgroundColor: colors.GrayF3,
		borderRadius: 11,
		overflow: 'hidden',
	},
});
