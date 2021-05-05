import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 7,
	},
	rail: {
		flex: 1,
		height: 6,
		borderRadius: 3,
		backgroundColor: colors.OrangeLight,
	},
	railSelected: {
		height: 6,
		borderRadius: 3,
		backgroundColor: colors.Orange,
	},
	thumb: {
		width: 17,
		height: 17,
		borderRadius: 8.5,
		backgroundColor: colors.Orange,
	},
	labelContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 12,
		paddingRight: 7,
	},
	labelText: {
		...text.body,
		...text.bold,
		fontSize: 14,
		color: colors.Gray62,
	},
});
