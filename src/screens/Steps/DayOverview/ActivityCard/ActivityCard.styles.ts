import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		marginLeft: 16,
		marginRight: 32,
		width: '100%',
		height: 103,
		padding: 16,
		justifyContent: 'space-between',
		shadowColor: colors.Gray33,
		shadowOffset: {
			height: 4,
			width: 4,
		},
		elevation: 4,
	},
	activeCard: {
		marginLeft: 32,
		marginRight: 16,
	},
	topSquare: {
		height: 32,
		width: 32,
		marginRight: 16,
	},
	topContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	subtitleContainer: {
		flexDirection: 'row',
	},
	subtitleText: {
		...text.body,
		fontSize: 14,
		color: colors.Gray62,
	},
	cardTitleText: {
		...text.body,
		...text.bold,
		fontSize: 18,
		lineHeight: 20,
	},
	activeDetail: {
		backgroundColor: colors.GrayC4,
	},
	inactiveText: {
		color: colors.GrayAF,
	},
	circle: {
		borderColor: colors.Pink,
		borderWidth: 2,
		height: 22,
		width: 22,
		borderRadius: 11,
	},
	inactive: {
		borderColor: colors.PinkTransparent,
		height: 16,
		width: 16,
	},
	fillActive: {
		backgroundColor: colors.Pink,
	},
	fillInactive: {
		backgroundColor: colors.PinkTransparent,
	},
	emptyProgressBar: {
		width: '100%',
		height: 13,
		borderRadius: 6.5,
		backgroundColor: colors.GrayC4,
	},
	clockContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	clockHands: {
		position: 'absolute',
		flex: 1,
		alignItems: 'center',
		top: 2,
	},
});
