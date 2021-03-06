import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	journalContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	journalSpace: {
		height: '100%',
		width: 3,
	},
	labelText: {
		...text.body,
		fontSize: 12,
		textAlign: 'center',
		color: colors.Gray62,
	},
	labelSelected: {
		...text.bold,
	},
});
