import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: colors.White,
	},
	childrenContainer: {
		flexGrow: 1,
	},
	titleContainer: {
		paddingHorizontal: 23,
		backgroundColor: colors.GrayF3,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 18,
		marginBottom: 14,
	},
	subtitleText: {
		...text.body,
		fontSize: 17,
		marginBottom: 27,
	},
});
