import { StyleSheet, Dimensions } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

const { width } = Dimensions.get('screen');

// original width: 414

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	bodyContainer: {
		marginVertical: 16,
		paddingHorizontal: 59,
	},
	bodyText: {
		...text.body,
		fontSize: 17,
		textAlign: 'center',
	},
	headline: {
		...text.body,
		...text.headline,
		fontWeight: '400',
		fontSize: 20,
		lineHeight: 38,
	},
	highlight: {
		fontWeight: '700',
		color: colors.Orange,
	},
	allCirclesContainer: {
		flex: 1,
		marginHorizontal: 10,
	},
	circleText: {
		...text.body,
		fontSize: 10,
		lineHeight: 12,
		textAlign: 'center',
	},
	circle1: {
		...StyleSheet.absoluteFillObject,
		width: width * 0.9516908213,
		height: width * 0.9516908213,
		borderColor: colors.Black,
		borderWidth: 1,
		borderRadius: width / 2,
		backgroundColor: colors.WhiteTransparent,
	},
	circle1text1: {
		position: 'absolute',
		left: width / 8.28,
		top: width / 2.5875,
	},
	circle1text2: {
		position: 'absolute',
		left: width / 7.8113207547,
		top: width / 1.8,
	},
	circle2: {
		...StyleSheet.absoluteFillObject,
		width: width * 0.7342995169,
		height: width * 0.7342995169,
		borderColor: colors.Black,
		borderWidth: 1,
		borderRadius: width / 2,
		left: width / 41.4,
		top: width / 7.5272727273,
	},
	circle2text1: {
		position: 'absolute',
		left: width / 4.8705882353,
		top: width / 6.9,
	},
	circle2text2: {
		position: 'absolute',
		left: width / 2.9,
		top: width / 5.175,
	},
	circle2text3: {
		position: 'absolute',
		left: width / 2.8,
		top: width / 2.3,
	},
	circle3: {
		...StyleSheet.absoluteFillObject,
		width: width * 0.5169082126,
		height: width * 0.5169082126,
		borderColor: colors.Black,
		borderWidth: 1,
		borderRadius: width * 0.6376811594,
		left: width / 20.7,
		top: width / 4.14,
	},
	circle3text1: {
		position: 'absolute',
		left: width / 2.5090909091,
		top: width / -20.7,
	},
	circle3text2: {
		position: 'absolute',
		left: width / 2.07,
		top: width / 20.7,
	},
	circle3text3: {
		position: 'absolute',
		left: width / 1.85,
		top: width / 2.9,
	},
	circle3text4: {
		position: 'absolute',
		left: width / 2.2378378378,
		top: width / 2.1789473684,
	},
	circle4: {
		...StyleSheet.absoluteFillObject,
		width: width * 0.3236714976,
		height: width * 0.3236714976,
		borderColor: colors.Black,
		borderWidth: 1,
		borderRadius: width / 2,
		left: width / 13.8,
		top: width / 2.9571428571,
	},
	circle4text1: {
		position: 'absolute',
		left: width / 1.84,
		top: width / -4.14,
	},
	circle4text2: {
		position: 'absolute',
		left: width / 1.5622641509,
		top: width / -6.9,
	},
	circle4text3: {
		position: 'absolute',
		left: width / 1.45,
		top: width / 3.2,
	},
	circle4text4: {
		position: 'absolute',
		left: width / 1.84,
		top: width / 2.1789473684,
	},
	middleLine: {
		position: 'absolute',
		top: width / 1.3573770492,
		left: width / 3.9428571429,
		height: 0,
		width: width / 1.389261745,
		borderColor: colors.Orange,
		borderWidth: 1.5,
	},
	middleDot: {
		top: -7.5,
		width: 15,
		height: 15,
		borderRadius: 7.5,
		backgroundColor: colors.Orange,
		position: 'absolute',
	},
	middleDot1: {
		left: -7.5,
	},
	middleDot2: {
		left: width / 4.6,
	},
	middleDot3: {
		left: width / 2.4352941176,
	},
	middleDot4: {
		left: width / 1.656,
	},
	middleText: {
		...text.body,
		fontSize: 12,
		lineHeight: 15,
		textAlign: 'center',
		fontWeight: '500',
	},
	middleTextContainer: {
		position: 'absolute',
		top: width / 1.4628975265,
		left: width / 5.175,
	},
	middleTextBox: {
		position: 'absolute',
	},
	middleText1: {
		left: width / 138,
	},
	middleText2: {
		left: width / 3.7636363636,
	},
	middleText3: {
		left: width / 2.3,
	},
	middleText4: {
		left: width / 1.5681818182,
	},
});
