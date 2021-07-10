import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
	titleContainer: {
		paddingTop: 28,
		paddingBottom: 22,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 21,
		lineHeight: 21,
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
	orangeText: {
		color: colors.Orange,
	},
	sq1: {
		position: 'absolute',
		top: -8,
		right: 11,
	},
	sq2: {
		position: 'absolute',
		right: 30,
	},
	sq3: {
		position: 'absolute',
		top: 10,
		right: 0,
	},
	journalContainer: {
		flex: 1,
		backgroundColor: colors.GrayF3,
		borderRadius: 9,
		padding: 16,
	},
	howAreYouFeelingText: {
		color: colors.Gray33,
	},
	journalHistoryContainer: {
		flex: 1,
		overflow: 'hidden',
	},
	journalHistoryHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 12,
	},
});
