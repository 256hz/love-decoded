import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	pickersContainer: {
		paddingHorizontal: 83,
	},
	timePickerContainer: {
		width: '100%',
		height: 42,
		backgroundColor: colors.OrangeLight,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
	},
	timePickerHeadingText: {
		...text.body,
		...text.headline,
		fontSize: 18,
		lineHeight: 18,
		marginBottom: 14,
	},
	subtitleText: {
		...text.body,
		...text.footerText,
		fontSize: 16,
		lineHeight: 33,
		marginBottom: 32,
	},
	timeText: {
		...text.body,
		fontSize: 20,
	},
	selectorContainer: {
		marginBottom: 33,
	},
	dropdownContainer: {
		textAlign: 'center',
		height: '100%',
		flex: 4,
		backgroundColor: 'red',
	},
	dropdownsContainer: {
		marginVertical: 8,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorContainer: {
		width: '100%',
		marginBottom: 9,
		marginTop: 0,
		marginLeft: 16,
		justifyContent: 'center',
	},
	errorText: {
		...text.body,
		color: colors.RedDark,
		lineHeight: 15,
	},
	textInput: {
		backgroundColor: colors.OrangeLight,
		width: '100%',
		height: 45,
		borderRadius: 5,
		paddingLeft: 16,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 9,
	},
	placeholderText: {
		...text.body,
		height: '100%',
		fontSize: 20,
		color: colors.GrayBC,
	},
	text: {
		...text.body,
		fontSize: 20,
		color: colors.Gray33,
	},
});
