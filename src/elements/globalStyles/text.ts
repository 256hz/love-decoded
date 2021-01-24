import { TextStyle } from 'react-native';
import colors from './color';

const text = {
	body: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 15,
		lineHeight: 24,
		letterSpacing: -0.24,
	} as TextStyle,
	headline: {
		fontSize: 22,
		lineHeight: 28,
		fontWeight: '500',
		textAlign: 'center',
	} as TextStyle,
	topText: {
		textAlign: 'center',
	} as TextStyle,
	buttonText: {
		marginHorizontal: 5,
	} as TextStyle,
	highlight: {
		fontWeight: '700',
		color: colors.Orange,
	} as TextStyle,
	footerText: {
		color: colors.GrayTransparent073,
		textAlign: 'center',
		marginTop: 8,
	} as TextStyle,
};

export default text;
