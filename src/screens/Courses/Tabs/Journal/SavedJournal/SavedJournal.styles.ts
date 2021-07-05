import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 9,
		padding: 13,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 21,
		lineHeight: 21,
		color: colors.Orange,
	},
	subtitleContainer: {
		marginBottom: 12,
	},
	subtitleText: {
		...text.body,
		...text.bold,
		fontSize: 19,
		lineHeight: 24,
	},
	text: {
		...text.body,
	},
	journalText: {
		color: colors.Gray33,
	},
});
