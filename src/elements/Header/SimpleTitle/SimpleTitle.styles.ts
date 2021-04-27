import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 16,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 19,
	},
});

