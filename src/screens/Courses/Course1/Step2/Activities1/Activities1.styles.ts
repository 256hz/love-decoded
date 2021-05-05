import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	bodyContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	bodyText: {
		...text.body,
	},
	boldText: {
		...text.body,
		...text.bold,
	},
	textItemContainer: {
		padding: 22,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textInputContainer: {
		marginBottom: 32,
	},
	textNote: {
		...text.body,
		color: colors.Gray92,
	},
});
