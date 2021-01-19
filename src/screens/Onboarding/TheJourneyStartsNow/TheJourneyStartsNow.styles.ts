import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '40%',
	},
	bodyContainer: {
		paddingHorizontal: 63,
		marginBottom: 50,
	},
	bodyText: {
		...text.body,
		fontSize: 19,
		textAlign: 'center',
	},
	highlightContainer: {
		marginBottom: 50,
	},
	highlightText: {
		...text.body,
		...text.headline,
		...text.highlight,
		textAlign: 'center',
	},
	buttonContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 40,
		borderRadius: 10,
		backgroundColor: colors.Orange,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: colors.White,
	},
});
