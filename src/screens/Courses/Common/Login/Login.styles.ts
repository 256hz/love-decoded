import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 23,
		paddingBottom: '40%',
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
		marginBottom: 4,
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
	forgotPasswordLinkText: {
		color: colors.Gray62,
		textDecorationLine: 'underline',
	},
	buttonContainer: {
		marginTop: 36,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: 102,
		height: 35,
		borderRadius: 10,
		backgroundColor: colors.Orange,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		...text.body,
		fontSize: 16,
		color: colors.White,
	},
	loginErrorContainer: {
		width: '100%',
		marginVertical: 16,
		paddingHorizontal: 42,
	},
	loginErrorText: {
		...text.body,
		color: colors.Red,
	},
	noLoginErrorText: {
		...text.body,
		color: colors.Transparent,
	},
});
