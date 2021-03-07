import { Dimensions, StyleSheet } from 'react-native';

// imported in AudioPlayerBar from here to prevent a require cycle
export const TOP_BUTTONS_HEIGHT = 40;
export const TIME_BAR_HEIGHT = 35;
export const TIME_HEIGHT = 35;
export const TIME_NUDGE_UP = -7;

const TOTAL_AUDIO_BAR_HEIGHT = TIME_BAR_HEIGHT + TIME_HEIGHT + TIME_NUDGE_UP;
const BOTTOM_CONTENT_HEIGHT = 30;

export const MARGIN = 25;

export default StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: MARGIN,
		justifyContent: 'space-between',
		paddingTop: 10,
		marginBottom: 25,
	},
	bottomContainer: {

	},
	withAudioBar: {
		height: TOTAL_AUDIO_BAR_HEIGHT + BOTTOM_CONTENT_HEIGHT,
	},
	withoutAudioBar: {
		height: BOTTOM_CONTENT_HEIGHT,
	},
});
