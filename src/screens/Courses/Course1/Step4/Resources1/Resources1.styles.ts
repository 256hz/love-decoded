import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	subtitleContainer: {
		paddingHorizontal: 24,
	},
	subtitleText: {
		...text.body,
		fontSize: 16,
		lineHeight: 20,
		marginVertical: 12,
	},
	listTextItem: {
		...text.body,
		textAlign: 'center',
		marginVertical: 12,
	},
	itemText: {
		...text.body,
		fontSize: 14,
	},
	bottomText: {
		...text.body,
		...text.bold,
		fontSize: 14,
	},
});
