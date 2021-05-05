import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	background: {
		flex: 1,
	},
	backgroundColorOnly: {
		flex: 1,
		backgroundColor: colors.OrangeExtraLight,
	},
	children: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
	},
});
