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
		borderRadius: 15,
		marginVertical: 8,
		marginHorizontal: 16,
		paddingVertical: 20,
		paddingHorizontal: 32,
		justifyContent: 'center',
	},
	selectionText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 19,
		textAlign: 'center',
	},
	subtitleContainer: {
		marginTop: 30,
		alignItems: 'center',
		marginBottom: 12,
	},
});
