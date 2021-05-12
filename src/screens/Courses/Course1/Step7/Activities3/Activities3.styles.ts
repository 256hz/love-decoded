import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	bodyContainer: {
		flex: 1,
		padding: 22,
		justifyContent: 'space-between',
	},
	bodyText: {
		...text.body,
	},
	boldText: {
		...text.body,
		...text.bold,
	},
	textItemContainer: {
		marginBottom: 24,
		marginTop: 8,
	},
	textInput: {
		flex: 1,
		minHeight: 150,
		marginBottom: 16,
	},
	button: {
		marginHorizontal: 40,
		backgroundColor: colors.Orange,
		borderRadius: 4,
		height: 34,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		...text.body,
		...text.bold,
		fontSize: 17,
		color: colors.White,
	},
});
