import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 23,
		justifyContent: 'space-between',
		backgroundColor: colors.White,
	},
	promptContainer: {
		marginTop: 47,
	},
	promptText: {
		...text.body,
		fontSize: 16,
	},
	surveyButton: {
		width: '100%',
		height: 97,
		marginBottom: 24,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.White,
		borderRadius: 6,
		shadowRadius: 4,
		shadowOpacity: 0.25,
		shadowColor: colors.Gray33,
		shadowOffset: {
			height: 4,
			width: 0,
		},
		elevation: 4,
	},
	selected: {
		backgroundColor: colors.Orange,
	},
	buttonText: {
		...text.body,
		...text.bold,
		fontSize: 24,
	},
	buttonTextSelected: {
		color: colors.White,
	},
});
