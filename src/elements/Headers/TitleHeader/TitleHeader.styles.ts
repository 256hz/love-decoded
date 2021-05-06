import { Dimensions, StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export const TITLE_HEADER_HEIGHT = 125;
export const EXTRA_TITLE_LINE_HEIGHT = 50;
export const PROGRESS_HEIGHT = 57;
export const PROGRESS_WIDTH = 224;
export const PROGRESS_DOT_WIDTH = 16;
export const TITLE_WITH_PROGRESS_HEIGHT = TITLE_HEADER_HEIGHT - PROGRESS_DOT_WIDTH + PROGRESS_HEIGHT;

export default StyleSheet.create({
	titleHeader: {
		height: TITLE_HEADER_HEIGHT,
		backgroundColor: colors.GrayFB,
	},
	titleWithProgressHeader: {
		height: TITLE_WITH_PROGRESS_HEIGHT,
		backgroundColor: colors.GrayFB,
	},
	headerContainer: {
		flex: 1,
		width: Dimensions.get('screen').width,
	},
	titleContainer: {
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
	progressBar: {
		width: Dimensions.get('screen').width,
		justifyContent: 'center',
		alignItems: 'center',
	},
	progressContainer: {
		width: PROGRESS_WIDTH,
		height: PROGRESS_HEIGHT,
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
		width: PROGRESS_DOT_WIDTH,
		height: PROGRESS_DOT_WIDTH,
		borderRadius: PROGRESS_DOT_WIDTH / 2,
		borderWidth: 2,
		borderColor: colors.Orange,
		backgroundColor: colors.White,
	},
	active: {
		backgroundColor: colors.Orange,
	},
});
