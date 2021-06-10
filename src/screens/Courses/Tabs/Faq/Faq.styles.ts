import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';
import { hasNotch } from 'react-native-device-info';

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: hasNotch() ? 43 : 0,
	},
	titleContainer: {
		paddingTop: 28,
		paddingBottom: 22,
		paddingLeft: 24,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 21,
		lineHeight: 21,
	},
	categoriesContainer: {
		paddingHorizontal: 24,
		paddingVertical: 6,
		marginBottom: 16,
	},
});
