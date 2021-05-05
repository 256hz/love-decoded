import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

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
	button: {
		marginHorizontal: 48,
		height: 47,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6,
		borderWidth: 1,
		borderColor: colors.Black,
		marginTop: 48,
	},
	scrollItemsContainer: {
		paddingVertical: 18,
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
