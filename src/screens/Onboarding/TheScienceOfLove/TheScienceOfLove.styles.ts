import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	topTextContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
		paddingHorizontal: 64,
	},
	topText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 17,
		lineHeight: 24,
		letterSpacing: -0.24,
	},
	highlight: {
		fontWeight: '700',
		color: '#F1751B',
	},
	cards: {
		width: '100%',
		minHeight: '35%',
		marginTop: 16,
	},
	footerText: {
		color: 'rgba(151, 151, 151, 0.73)',
		textAlign: 'center',
		marginTop: 8,
	},
});
