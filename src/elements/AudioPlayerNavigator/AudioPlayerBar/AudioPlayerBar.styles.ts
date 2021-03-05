import { Dimensions, StyleSheet } from 'react-native';
import colors from 'elements/globalStyles/color';
import {
	MARGIN,
	TOP_BUTTONS_HEIGHT,
	TIME_BAR_HEIGHT,
	TIME_HEIGHT,
	TIME_NUDGE_UP,
} from '../AudioPlayerNavigator.styles';

const { width } = Dimensions.get('screen');

export const TIME_DOT_SIZE = 18;
export const TIME_BAR_WIDTH = width - MARGIN * 4;

export default StyleSheet.create({
	playerContainer: {
		width: TIME_BAR_WIDTH,
	},
	topButtonsContainer: {
		width: TIME_BAR_WIDTH,
		height: TOP_BUTTONS_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 6,
	},
	placeholderContainer: {
		width: 52,
	},
	seekContainer: {
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 160,
	},
	seekButton: {
		height: '100%',
		paddingHorizontal: 12,
		alignItems: 'center',
		flexDirection: 'row',
	},
	playContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 32,
		alignSelf: 'flex-end',
	},
	pauseContainer: {
		width: 10,
		height: 20,
		marginRight: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'flex-end',
	},
	pauseLine: {
		width: 2,
		height: 20,
		backgroundColor: colors.Black,
		alignSelf: 'flex-end',
	},
	playButtonContainer: {
		height: '100%',
		justifyContent: 'center',
	},
	playLoading: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderColor: colors.GrayBC,
		borderWidth: 2,
	},
	audioBarContainer: {
		width: TIME_BAR_WIDTH,
		height: TIME_BAR_HEIGHT,
		flexDirection: 'row',
		alignItems: 'center',
	},
	audioBar: {
		width: TIME_BAR_WIDTH,
		height: 2,
		borderRadius: 1,
		backgroundColor: colors.Gray92,
	},
	audioTimeDot: {
		position: 'absolute',
		width: TIME_DOT_SIZE,
		height: TIME_DOT_SIZE,
		borderRadius: TIME_DOT_SIZE / 2,
		backgroundColor: colors.Black,
	},
	audioTimeContainer: {
		width: TIME_BAR_WIDTH,
		height: TIME_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginTop: TIME_NUDGE_UP,
		paddingLeft: 20,
		paddingBottom: 20,
	},
	text: {
		fontFamily: 'Roboto-Regular',
		fontWeight: '400',
		fontSize: 15,
	},
	spinner: {
		height: 18,
		width: 18,
	},
});
