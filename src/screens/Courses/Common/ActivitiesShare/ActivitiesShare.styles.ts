import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	bodyContainer: {
		flex: 1,
		padding: 22,
		justifyContent: 'space-around',
	},
	bodyText: {
		...text.body,
	},
	boldText: {
		...text.bold,
		textAlign: 'center',
	},
	textItemContainer: {
		marginBottom: 24,
		marginTop: 8,
	},
	shareContainer: {
		height: 189,
		padding: 16,
		borderRadius: 26,
		backgroundColor: colors.GrayFB,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	shareItem: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});
