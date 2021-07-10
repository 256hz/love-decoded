import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		paddingHorizontal: 23,
	},
	inputLabelContainer: {
		marginBottom: 4,
	},
	inputLabel: {
		...text.body,
		color: colors.Gray62,
		fontSize: 14,
	},
	input: {
		width: '80%',
		height: 40,
		padding: 8,
		borderRadius: 4,
		borderColor: colors.GrayC4,
		marginBottom: 12,
	},
	buttonContainer: {
		marginTop: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: 65,
		height: 40,
		borderRadius: 4,
		backgroundColor: colors.Orange,
	},
	buttonText: {
		...text.body,
		fontSize: 16,
		color: colors.White,
	},
	loginErrorContainer: {
		width: '100%',
		marginVertical: 16,
		marginHorizontal: 42,
	},
	loginErrorText: {
		...text.body,
		fontSize: 14,
		color: colors.Red,
	},
});
