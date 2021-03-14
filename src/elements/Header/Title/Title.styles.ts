import { StatusBar, StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export const TITLE_HEADER_HEIGHT = 150 - (StatusBar.currentHeight || 0);
export const TITLE_WITH_PROGRESS_HEIGHT = TITLE_HEADER_HEIGHT + 79;
export const PROGRESS_WIDTH = 208;

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
	progressContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	progressLine: {
		width: PROGRESS_WIDTH,
		height: 2,
		backgroundColor: colors.GrayC4,
	},
	progressDotContainer: {
		position: 'absolute',
	},
	progressDot: {
		width: 16,
		height: 16,
		borderRadius: 8,
		borderWidth: 2,
		borderColor: colors.Orange,
		backgroundColor: colors.White,
	},
	active: {
		backgroundColor: colors.Orange,
	},
});
