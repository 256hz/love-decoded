import { StyleSheet } from 'react-native';
import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	kavContainer: {
		flex: 1,
	},
	container: {
		flexGrow: 1,
		paddingHorizontal: 16,
		paddingVertical: 18,
		justifyContent: 'space-between',
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
		backgroundColor: colors.WhiteMoreTransparent,
		width: '100%',
		height: 45,
		borderRadius: 5,
		paddingLeft: 16,
		marginBottom: 9,
	},
	placeholderText: {
		...text.body,
		height: '100%',
		fontSize: 16,
		lineHeight: 18,
		color: colors.Gray92,
	},
	text: {
		...text.body,
		fontSize: 16,
		lineHeight: 18,
		color: colors.GrayTransparent071,
	},
	genderAndAgeContainer: {
		flexDirection: 'row',
		marginTop: 8,
		justifyContent: 'space-between',
	},
	dropdownContainer: {
		height: '100%',
		width: '48.5%',
	},
	termsContainer: {
		marginTop: 42,
		marginBottom: 34,
		justifyContent: 'center',
		alignItems: 'center',
	},
	termsText: {
		...text.body,
		color: colors.Gray92,
		fontSize: 16,
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
		marginBottom: 30,
	},
	buttonText: {
		...text.body,
		fontSize: 18,
		color: colors.White,
		fontWeight: '700',
	},
	disabled: {
		backgroundColor: colors.GrayButton,
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
