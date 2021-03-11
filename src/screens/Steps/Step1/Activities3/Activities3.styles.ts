import { StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';

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
	textItemContainer: {
		marginBottom: 24,
		marginTop: 8,
	},
	shareContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

});
