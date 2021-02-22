import colors from 'elements/globalStyles/color';
import { Dimensions, StyleSheet } from 'react-native';
import { MARGIN } from '../AudioPlayerNavigator.styles';

const { width } = Dimensions.get('screen');

export const TIME_DOT_SIZE = 18;
export const TIME_BAR_WIDTH = width - MARGIN * 2;

export default StyleSheet.create({
	playerContainer: {
		width: '100%',
	},
	topButtonsContainer: {
		width: '100%',
		height: 40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 6,
	},
	placeholderContainer: {
		width: 42,
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
		backgroundColor: 'black',
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
		width: width - MARGIN * 2,
		height: 35,
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		backgroundColor: 'black',
	},
	audioTimeContainer: {
		width: TIME_BAR_WIDTH,
		height: 20,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: -8,
	},
	text: {
		fontFamily: 'Roboto-Regular',
		fontWeight: '400',
		fontSize: 15,
	},
});
