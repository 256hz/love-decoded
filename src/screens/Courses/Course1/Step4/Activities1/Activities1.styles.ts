import { StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';

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
	},
	textItemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 24,
		marginTop: 8,
	},
	textInput: {
		marginBottom: 16,
	},
});
