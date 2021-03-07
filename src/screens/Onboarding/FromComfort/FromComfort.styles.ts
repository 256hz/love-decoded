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
		width: '100%',
		marginHorizontal: 10,
	},
	circleText: {
		...text.body,
		fontSize: 10,
		lineHeight: 12,
		textAlign: 'center',
	},
	circle1: {
		flex: 1,
		width: width * 0.952,
		height: width * 0.952,
		borderColor: colors.Black,
		borderWidth: 1,
		borderRadius: width / 2,
		backgroundColor: colors.WhiteTransparent,
	},
	circle1text1: {
		position: 'absolute',
		left: width / 7.5,
		top: width / 2.65,
	},
	circle1text2: {
		position: 'absolute',
		left: width / 7.8113207547,
		top: width / 1.8,
	},
	circle2: {
		...StyleSheet.absoluteFillObject,
		width: width * 0.734,
		height: width * 0.734,
		borderColor: colors.Black,
		borderWidth: 1,
		borderRadius: width / 2,
		left: width / 41.4,
		top: width / 7.527,
	},
	circle2text1: {
		position: 'absolute',
		left: width / 4.87,
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
		width: width * 0.517,
		height: width * 0.517,
		borderColor: colors.Black,
		borderWidth: 1,
		borderRadius: width * 0.638,
		left: width / 20.7,
		top: width / 4.14,
	},
	circle3text1: {
		position: 'absolute',
		left: width / 2.509,
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
		left: width / 2.238,
		top: width / 2.179,
	},
	circle4: {
		...StyleSheet.absoluteFillObject,
		width: width * 0.324,
		height: width * 0.324,
		borderColor: colors.Black,
		borderWidth: 1,
		borderRadius: width / 2,
		left: width / 13.8,
		top: width / 2.957,
	},
	circle4text1: {
		position: 'absolute',
		left: width / 1.84,
		top: width / -4.14,
	},
	circle4text2: {
		position: 'absolute',
		left: width / 1.562,
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
		top: width / 2.179,
	},
	middleLine: {
		position: 'absolute',
		top: width / 1.33,
		left: width / 3.943,
		height: 0,
		width: width / 1.389,
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
		left: width / 2.435,
	},
	middleDot4: {
		left: width / 1.656,
	},
	middleText: {
		...text.body,
		fontSize: 12,
		lineHeight: 15,
		textAlign: 'center',
		...text.bold,
	},
	middleTextContainer: {
		position: 'absolute',
		top: width / 1.43,
		left: width / 5.175,
	},
	middleTextBox: {
		position: 'absolute',
	},
	middleText1: {
		left: width / 138,
	},
	middleText2: {
		left: width / 3.764,
	},
	middleText3: {
		left: width / 2.3,
	},
	middleText4: {
		left: width / 1.568,
	},
});
