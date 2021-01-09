import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: '100%',
		height: 35,
		marginTop: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	navButton: {
		width: 102,
		height: 35,
		backgroundColor: 'rgba(241, 117, 27, 0.3)',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	disabled: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
	text: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 15,
		marginHorizontal: 5,
	},
});
