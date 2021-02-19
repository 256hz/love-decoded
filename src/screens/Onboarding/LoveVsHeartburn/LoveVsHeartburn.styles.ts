import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 30,
	},
	text: {
		...text.body,
		...text.headline,
	},
});
