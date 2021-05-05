import { StyleSheet } from 'react-native';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	cardContainer: {
		borderRadius: 6,
		justifyContent: 'space-between',
		backgroundColor: colors.White,
		padding: 21,
	},
	body: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 17,
		lineHeight: 23,
		letterSpacing: -0.24,
	},
	centerBody: {
		justifyContent: 'center',
	},
	highlight: {
		fontWeight: '700',
		color: colors.Orange,
	},
	title: {
		fontSize: 20,
		lineHeight: 30,
		marginBottom: 8,
	},
	cardBottom: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: 151,
		height: 34,
		marginTop: 16,
		backgroundColor: colors.Orange,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 16,
		textAlign: 'center',
	},
	bottomText: {
		color: colors.GrayTransparent073,
	},
});
