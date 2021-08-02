import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	container: {
		flex: 1,
		height: '50%',
		justifyContent: 'space-between',
		paddingHorizontal: 23,
	},
	backButtonContainer: {
		height: 50,
		width: 50,
		borderRadius: 25,
		paddingBottom: 3,
		backgroundColor: colors.WhiteMoreTransparent,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headingContainer: {
		marginVertical: 16,
		paddingHorizontal: 36,
		alignItems: 'center',
	},
	headingText: {
		...text.body,
		fontSize: 18,
		textAlign: 'center',
	},
	inputsContainer: {
		width: '100%',
		justifyContent: 'space-between',
	},
	inputLabelContainer: {
		marginBottom: 32,
	},
	inputLabel: {
		...text.body,
		color: colors.Gray33,
		fontSize: 16,
	},
	input: {
		width: '100%',
		height: 40,
		padding: 8,
		borderRadius: 4,
		borderColor: colors.GrayC4,
		marginBottom: 18,
		backgroundColor: colors.WhiteTransparent,
	},
	text: {
		...text.body,
		fontSize: 16,
		lineHeight: 18,
		color: colors.GrayTransparent071,
	},
	forgotPasswordLinkText: {
		color: colors.Gray62,
		textDecorationLine: 'underline',
		textAlign: 'center',
	},
	buttonContainer: {
		marginVertical: 36,
		justifyContent: 'center',
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
		...text.bold,
		fontSize: 18,
		color: colors.White,
	},
	disabled: {
		backgroundColor: colors.GrayButton,
	},
	loginErrorContainer: {
		width: '100%',
		height: '30%',
		paddingHorizontal: 42,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginErrorText: {
		...text.body,
		color: colors.Red,
	},
	noLoginErrorText: {
		...text.body,
		color: colors.Transparent,
	},
	spinner: {
		height: 28,
		width: 28,
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
});
