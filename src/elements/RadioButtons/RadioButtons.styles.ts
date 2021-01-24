import { StyleSheet } from 'react-native';
import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	optionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	button: {
		width: 22,
		height: 22,
		borderRadius: 11,
		backgroundColor: colors.GrayTransparent028,
		marginRight: 19,
	},
	selected: {
		backgroundColor: colors.Orange,
	},
	labelText: {
		...text.body,
		fontSize: 17,
	},
});
