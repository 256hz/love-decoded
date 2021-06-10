import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		height: 32,
		borderRadius: 5,
		paddingHorizontal: 19,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		...text.body,
		...text.bold,
		color: colors.Gray92,
	},
	activeText: {
		color: colors.White,
	},
	active: {
		backgroundColor: colors.Orange,
	},
});
