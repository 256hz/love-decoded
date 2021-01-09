import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	multiSelectContainer: {
		width: '100%',
		height: '60%',
		paddingVertical: 8,
	},
	multiSelectContainerStyle: {
		alignItems: 'center',
		paddingBottom: 32,
	},
	selectionContainer: {
		marginVertical: 8,
		paddingHorizontal: 32,
		height: 52,
		minWidth: 170,
		borderRadius: 15,
		justifyContent: 'center',
	},
	selectionText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 21,
		textAlign: 'center',
	},
	selected: {
		backgroundColor: 'rgba(248, 123, 32, 0.44)',
	},
});
