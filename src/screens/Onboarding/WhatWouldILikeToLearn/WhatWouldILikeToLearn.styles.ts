import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	kavContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	topTextContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
	},
	topText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 15,
		marginHorizontal: 5,
		textAlign: 'center',
	},
	selectionContainer: {
		marginVertical: 8,
		paddingVertical: 8,
		paddingHorizontal: 32,
		minWidth: 170,
		maxWidth: 280,
		minHeight: 52,
		borderRadius: 15,
		justifyContent: 'center',
	},
	selectionText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 19,
		textAlign: 'center',
	},
});