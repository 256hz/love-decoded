import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const TIME_DOT_SIZE = 18;
export const MARGIN = 18;
export const TIME_BAR_WIDTH = width - MARGIN * 2;

export default StyleSheet.create({
	container: {
		width: '100%',
		height: 250,
		alignSelf: 'flex-end',
	},
	playerContainer: {
		width: width - MARGIN * 2,
		paddingHorizontal: 16,
	},
	topButtonsContainer: {
		width: width - MARGIN * 2,
		height: 40,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	pauseContainer: {
		width: 10,
		height: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	pauseLine: {
		width: 2,
		height: 20,
		backgroundColor: 'black',
	},
	playButtonContainer: {
		width: 40,
		height: 40,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	playLoading: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderColor: 'gray',
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
		backgroundColor: 'gray',
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
