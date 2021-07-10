import { StyleSheet } from 'react-native';
import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: colors.White,
	},
	text: {
		...text.body,
	},
});
