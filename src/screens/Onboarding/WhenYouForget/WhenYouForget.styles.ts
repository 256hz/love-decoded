import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	textContainer: {
		height: '60%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 64,
	},
	headline: {
		fontFamily: 'Rubik',
		fontSize: 20,
		lineHeight: 38,
		fontWeight: '400',
		textAlign: 'center',
		letterSpacing: -0.24,
	},
	highlight: {
		fontWeight: '700',
		color: '#F1751B',
	},
});
