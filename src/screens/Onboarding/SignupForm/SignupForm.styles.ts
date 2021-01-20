import { StyleSheet } from 'react-native';
import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 18,
	},
	titlePadding: {
		paddingTop: 42,
	},
	nameContainer: {
		marginBottom: 63,
	},
	emailContainer: {
		marginBottom: 14,
	},
	textInput: {
		backgroundColor: colors.White,
		width: '100%',
		height: 45,
		borderRadius: 5,
		paddingLeft: 16,
		...text.body,
		fontSize: 16,
		marginBottom: 9,
	},
	genderAndAgeContainer: {
		flexDirection: 'row',
		marginTop: 8,
		justifyContent: 'space-between',
	},
	dropdown: {
		// to be used with textInput
		width: '47.5%',
		marginBottom: undefined,
	},
	termsContainer: {
		marginTop: 42,
		marginBottom: 34,
		justifyContent: 'center',
		alignItems: 'center',
	},
	termsText: {
		...text.body,
		fontSize: 14,
		textAlign: 'center',
		textAlignVertical: 'center',
		marginHorizontal: 2,
	},
	linksContainer: {
		flexDirection: 'row',
	},
	termsLink: {
		textDecorationLine: 'underline',
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
	},
	button: {
		width: 192,
		height: 46,
		borderRadius: 10,
		backgroundColor: colors.Orange,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		...text.body,
		fontSize: 18,
		color: colors.White,
		fontWeight: '700',
	},
	disabled: {
		backgroundColor: colors.GrayTransparent,
	},
	errorContainer: {
		width: '100%',
		paddingHorizontal: 32,
		marginBottom: 9,
		marginTop: -1,
		justifyContent: 'center',
	},
	errorText: {
		...text.body,
		color: colors.RedDark,
		lineHeight: 15,
	},
});
