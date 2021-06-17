import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
	},
	contentContainer: {
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
	bodyText: {
		...text.body,
		marginBottom: 20,
		textAlign: 'left',
	},
	body: {
		...text.body,
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
		color: colors.White,
	},
	button: {
		width: 192,
		height: 40,
		borderRadius: 10,
		backgroundColor: colors.Black,
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
