import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: '100%',
		marginVertical: 16,
		paddingLeft: 19,
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		height: '100%',
		marginRight: 19,
		alignItems: 'center',
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingRight: 32,
	},
	labelText: {
		...text.body,
		fontSize: 15,
		color: colors.Gray62,
	},
});
