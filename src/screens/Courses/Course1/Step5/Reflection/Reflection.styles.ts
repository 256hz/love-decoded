import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 32,
	},
	boldText: {
		...text.body,
		...text.bold,
		fontSize: 16,
	},
	body: {
		...text.body,
		fontSize: 16,
		marginBottom: 24,
	},
});
