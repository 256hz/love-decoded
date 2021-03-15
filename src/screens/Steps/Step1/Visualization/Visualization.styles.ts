import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headline: {
		...text.body,
		...text.bold,
		fontSize: 22,
		textAlign: 'center',
	},
});
