import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 13,
		justifyContent: 'space-between',
		backgroundColor: 'white',
		padding: 21,
		paddingTop: 34,
	},
	body: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 17,
		lineHeight: 23,
		letterSpacing: -0.24,
	},
	highlight: {
		fontWeight: '700',
		color: '#F1751B',
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
		backgroundColor: '#F1751B',
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
		color: 'rgba(151, 151, 151, 0.73)',
	},
});
