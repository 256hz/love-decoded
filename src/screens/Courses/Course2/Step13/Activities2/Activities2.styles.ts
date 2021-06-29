import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	bodyContainer: {
		flex: 1,
		padding: 22,
	},
	bodyText: {
		...text.body,
	},
	boldText: {
		...text.body,
		...text.bold,
		textAlign: 'center',
	},
	textItemContainer: {
		marginBottom: 24,
		marginTop: 8,
	},
	textInput: {
		marginBottom: 16,
	},
});
