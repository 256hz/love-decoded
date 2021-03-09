import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
	},
	titleContainer: {
		paddingHorizontal: 23,
		backgroundColor: colors.GrayF3,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 18,
		marginBottom: 14,
	},
	subtitleText: {
		...text.body,
		fontSize: 17,
		marginBottom: 27,
	},
	bodyContainer: {
		flex: 1,
		padding: 22,
	},
	sliderContainer: {
		width: '100%',
		marginBottom: 34,
	},
	bodyText: {
		...text.body,
	},
	textItemContainer: {
		marginBottom: 24,
	},
});
