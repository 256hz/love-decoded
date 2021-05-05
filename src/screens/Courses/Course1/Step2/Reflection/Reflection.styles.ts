import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
	},
	contentContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 32,
	},
	questionText: {
		...text.body,
		fontSize: 18,
		textAlign: 'center',
	},
	headline: {
		...text.body,
		...text.bold,
		fontSize: 20,
		marginBottom: 10,
	},
	body: {
		...text.body,
		textAlign: 'center',
	},
	button: {
		width: 102,
		height: 35,
		borderRadius: 10,
		backgroundColor: colors.OrangeButton,
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
