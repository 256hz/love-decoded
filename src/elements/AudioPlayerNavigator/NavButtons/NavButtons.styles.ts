import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: '100%',
		height: 35,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	navButton: {
		width: 102,
		height: 35,
		backgroundColor: colors.OrangeButton,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	disabled: {
		backgroundColor: colors.GrayButton,
	},
	text: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 15,
		marginHorizontal: 5,
	},
});
