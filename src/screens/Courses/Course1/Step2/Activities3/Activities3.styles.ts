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
	textContainer: {
		maxWidth: '80%',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	textInput: {
		marginBottom: 16,
	},
});
