import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	subtitleContainer: {
		paddingHorizontal: 24,
	},
	text: {
		...text.body,
		fontSize: 14,
	},
	boldText: {
		...text.body,
		...text.bold,
		fontSize: 14,
	},
	textInput: {
		minHeight: 150,
		marginBottom: 16,
	},
});
