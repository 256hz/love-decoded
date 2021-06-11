import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		borderBottomColor: colors.GrayC4,
		borderBottomWidth: 1,
		paddingBottom: 24,
	},
	arrowContainer: {
		justifyContent: 'center',
		paddingVertical: 16,
		paddingRight: 16,
	},
	text: {
		...text.body,
	},
});
