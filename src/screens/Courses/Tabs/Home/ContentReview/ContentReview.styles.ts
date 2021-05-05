import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		marginTop: 45,
		width: '100%',
		paddingHorizontal: 14,
		paddingVertical: 20,
		borderRadius: 6,
		backgroundColor: colors.GrayF3,
	},
	titleContainer: {
		marginBottom: 21,
	},
	headline: {
		...text.body,
		...text.bold,
		fontSize: 16,
	},
	chooserContainer: {
		width: '100%',
		height: 37,
		paddingHorizontal: 21,
		borderRadius: 6,
		backgroundColor: colors.White,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	subtitleContainer: {
	},
	subtitle: {
		...text.body,
		color: colors.GrayC4,
		fontSize: 14,
		lineHeight: 14,
	},
	buttonRowContainer: {
		marginTop: 20,
		width: '100%',
		alignItems: 'flex-end',
	},
	button: {
		paddingHorizontal: 17,
		height: 35,
		backgroundColor: colors.Orange,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
	},
	disabled: {
		backgroundColor: colors.GrayButton,
	},
	buttonText: {
		...text.body,
		...text.bold,
		fontSize: 17,
		color: colors.White,
	},
	placeholderText: {
		...text.body,
		fontSize: 17,
		lineHeight: 20,
		color: colors.GrayBC,
	},
	text: {
		...text.body,
		fontSize: 17,
		lineHeight: 20,
		color: colors.Gray33,
	},
	pickerContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingRight: 12,
	},
	noChevron: {
		width: 0,
		height: 0,
	},
	chevronContainer: {
		right: -6,
	},
});
