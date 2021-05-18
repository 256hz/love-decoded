import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	subtitleContainer: {
		paddingHorizontal: 24,
	},
	listTextItem: {
		...text.body,
		textAlign: 'center',
		marginVertical: 9,
	},
	itemText: {
		...text.body,
		fontSize: 14,
	},
});
