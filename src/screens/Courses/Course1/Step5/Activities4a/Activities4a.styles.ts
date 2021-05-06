import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	bodyContainer: {
		flex: 1,
		justifyContent: 'center',
		padding: 22,
	},
	bodyText: {
		...text.body,
		textAlign: 'center',
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
		minHeight: 150,
		marginBottom: 16,
	},
});
