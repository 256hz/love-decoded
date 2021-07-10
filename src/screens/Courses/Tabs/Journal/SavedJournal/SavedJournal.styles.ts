import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		borderRadius: 9,
		padding: 13,
		backgroundColor: colors.GrayF3,
		marginBottom: 12,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 17,
		lineHeight: 17,
		color: colors.Orange,
	},
	subtitleContainer: {
		marginBottom: 12,
	},
	subtitleText: {
		...text.body,
		...text.bold,
		fontSize: 17,
		lineHeight: 17,
	},
	text: {
		...text.body,
	},
	journalText: {
		color: colors.Gray33,
	},
	gradient: {
		position: 'absolute',
		flex: 1,
	},
});
