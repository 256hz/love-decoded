import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	topText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 17,
		marginHorizontal: 5,
		lineHeight: 24,
		textAlign: 'center',
		letterSpacing: -0.24,
	},
	highlight: {
		fontWeight: '700',
		color: '#F1751B',
	},
	title: {
		fontSize: 20,
		lineHeight: 30,
	},
	topTextContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
		paddingHorizontal: 64,
	},
});
