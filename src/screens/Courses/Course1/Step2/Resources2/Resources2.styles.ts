import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	subtitleContainer: {
		paddingHorizontal: 24,
	},
	subtitleText: {
		...text.body,
		fontSize: 16,
		lineHeight: 20,
		textAlign: 'center',
		marginVertical: 12,
	},
	listTextItem: {
		...text.body,
		...text.bold,
		fontSize: 18,
		textAlign: 'center',
		marginVertical: 12,
	},
});
