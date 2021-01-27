import { StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingTop: '10%',
		paddingHorizontal: 60,
		marginBottom: 39,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 28,
	},
	radioButtonContainer: {
		flex: 1,
		alignItems: 'center',
	},
	radioButtonContainerStyle: {
		justifyContent: 'center',
	},
	text: {
		...text.body,
		fontSize: 19,
		lineHeight: 23,
		textAlign: 'center',
	},
	bold: {
		...text.body,
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '700',
	},
});
