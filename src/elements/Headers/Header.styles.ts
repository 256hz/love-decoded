import colors from '@elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	defaultHeader: {
		backgroundColor: colors.White,
		height: 100,
	},
	removeBottomBorder: {
		borderBottomColor: 'transparent',
		borderBottomWidth: 0,
		elevation: 0,
		shadowColor: 'transparent',
		shadowOpacity: 0,
		shadowRadius: 0,
	},
	emptyContainer: {
		position: 'absolute',
		width: 0,
		height: 0,
	},
	closeHeader: {
		height: 125,
		backgroundColor: colors.GrayF3,
	},
	closeHeader2: {
		height: 75,
		backgroundColor: colors.White,
	},
});
