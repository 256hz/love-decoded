import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: colors.White,
	},
	innerContainer: {
		flex: 1,
		borderRadius: 9,
		padding: 16,
		backgroundColor: colors.GrayF3,
	},
	titleContainer: {
		marginBottom: 12,
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
	titleTextInput: {
		width: '100%',
		height: 75,
	},
	storyTextInput: {
		flex: 1,
	},
	sq1: {
		position: 'absolute',
		top: -10,
		right: 20,
	},
	sq2: {
		position: 'absolute',
		right: 40,
	},
	sq3: {
		position: 'absolute',
		top: 10,
	},
	journalContainer: {
		flex: 1,
		backgroundColor: colors.GrayF3,
	},
	journalText: {
		color: colors.Gray33,
	},
	journalHistoryContainer: {
		flex: 1,
	},
	journalHistoryHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	iconsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		marginRight: 29,
	},
	iconImage: {
		marginHorizontal: 29,
	},
	iconImage2: {
		position: 'absolute',
		top: 5,
		left: 5,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 16,
	},
	buttonContainer: {
		width: 89,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.Orange,
		borderRadius: 5,
	},
	buttonText: {
		...text.body,
		...text.bold,
		color: colors.White,
	},
});
