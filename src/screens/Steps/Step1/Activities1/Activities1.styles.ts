import { StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	bodyContainer: {
		flex: 1,
		padding: 22,
	},
	bodyText: {
		...text.body,
	},
	boldText: {
		...text.body,
		...text.bold,
	},
	textItemContainer: {
		marginBottom: 18,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textInputContainer: {
		marginBottom: 32,
	},
	infoBubble: {
		padding: 15,
	},
	textNote: {
		...text.body,
		color: colors.Gray92,
	},
});
