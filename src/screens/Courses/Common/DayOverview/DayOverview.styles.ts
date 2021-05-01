import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export const PADDING = 16;

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: PADDING,
	},
	topTextContainer: {
		marginBottom: 30,
		paddingHorizontal: 16,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 17,
		lineHeight: 28,
	},
	progressText: {
		...text.body,
		fontSize: 14,
		lineHeight: 24,
		color: colors.Gray62,
	},
});
