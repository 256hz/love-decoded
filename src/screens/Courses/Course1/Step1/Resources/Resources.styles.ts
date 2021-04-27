import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	subtitleContainer: {
		paddingHorizontal: 24,
	},
	subtitleText: {
		...text.body,
		fontSize: 16,
		lineHeight: 20,
		textAlign: 'center',
		marginVertical: 12,
	},
	grayText: {
		color: colors.Gray62,
	},
	scrollContainer: {
		flex: 1,
		alignItems: 'center',
		paddingBottom: 16,
	},
	scrollItemsContainer: {
		paddingVertical: 23,
	},
	scrollWindow: {
		flex: 1,
		width: 220,
		backgroundColor: colors.GrayF3,
		borderRadius: 7,
	},
	listTextItem: {
		...text.body,
		...text.bold,
		fontSize: 18,
		textAlign: 'center',
		marginVertical: 12,
	},
});
