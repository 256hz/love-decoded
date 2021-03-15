import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	defaultHeader: {
		backgroundColor: colors.White,
		height: 100,
	},
	removeBottomBorder: {
		shadowColor: 'transparent',
		shadowRadius: 0,
		shadowOpacity: 0,
		borderBottomWidth: 0,
		borderBottomColor: 'transparent',
		elevation: 0,
	},
	emptyContainer: {
		position: 'absolute',
		width: 0,
		height: 0,
	},
});
