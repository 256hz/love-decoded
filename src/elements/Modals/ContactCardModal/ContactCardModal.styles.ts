import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		width: '100%',
		marginHorizontal: 32,
		backgroundColor: colors.White,
	},

});
