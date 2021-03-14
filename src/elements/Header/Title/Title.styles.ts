import { StatusBar, StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export const TITLE_HEADER_HEIGHT = 150 - (StatusBar.currentHeight || 0);

export default StyleSheet.create({
	titleHeader: {
		height: TITLE_HEADER_HEIGHT,
		backgroundColor: colors.GrayF3,
	},
	titleContainer: {
		flex: 1,
		alignItems: 'flex-start',
		paddingLeft: 23,
		paddingTop: 23,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 18,
		marginBottom: 14,
	},
	subtitleText: {
		...text.body,
		fontSize: 17,
		marginBottom: 27,
	},
});
