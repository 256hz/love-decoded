import { Dimensions, StyleSheet } from 'react-native';
import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { PADDING } from '../DayOverview.styles';

const CARD_HEIGHT = 103;

export default StyleSheet.create({
	areaContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	activeLeftBorder: {
		left: PADDING * -1,
		height: CARD_HEIGHT,
		width: 0,
		borderRightWidth: 2,
		borderRightColor: colors.Pink,
	},
	container: {
		width: Dimensions.get('window').width - 48 - PADDING,
		height: CARD_HEIGHT,
		backgroundColor: colors.White,
		marginHorizontal: 16,
		marginBottom: 24,
		padding: 16,
		justifyContent: 'space-between',
		shadowRadius: 4,
		shadowOpacity: 0.5,
		shadowColor: colors.Gray33,
		shadowOffset: {
			height: 4,
			width: 4,
		},
		elevation: 4,
		borderRadius: 6,
	},
	completeContainer: {},
	activeContainer: {
		marginLeft: 28,
		marginRight: 0,
	},
	futureContainer: {
		shadowOpacity: 0.25,
	},
	topSquare: {
		height: 32,
		width: 32,
		marginRight: 16,
		backgroundColor: colors.GrayAF,
	},
	completeTopSquare: {},
	activeTopSquare: {},
	futureTopSquare: {
		backgroundColor: colors.GrayE9,
	},
	topContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	topInnerContainer: {
		flexDirection: 'row',
	},
	subtitleContainer: {
		flexDirection: 'row',
	},
	subtitleText: {
		...text.body,
		fontSize: 14,
		lineHeight: 15,
		color: colors.Gray62,
	},
	cardTitleText: {
		...text.body,
		...text.bold,
		fontSize: 18,
		lineHeight: 18,
	},
	completeCardTitleText: {},
	activeCardTitleText: {},
	futureCardTitleText: {
		color: colors.GrayB1,
	},
	circle: {
		borderColor: colors.RedMedium,
		borderWidth: 2,
		height: 16,
		width: 16,
		borderRadius: 11,
	},
	completeCircle: {
		backgroundColor: colors.RedMedium,
	},
	activeCircle: {},
	futureCircle: {
		borderColor: colors.RedLight,
	},
	progressBar: {
		width: '100%',
		height: 13,
		borderRadius: 6.5,
		backgroundColor: colors.RedMedium,
	},
	completeProgressBar: {},
	activeProgressBar: {
		backgroundColor: colors.GrayC4,
	},
	futureProgressBar: {
		backgroundColor: colors.GrayE9,
	},
	clockContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 4,
	},
	clockHands: {
		position: 'absolute',
	},
});
