import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
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
