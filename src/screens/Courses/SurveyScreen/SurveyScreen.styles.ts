import { Dimensions, StyleSheet } from 'react-native';
import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 23,
		justifyContent: 'space-between',
		backgroundColor: colors.White,
	},
	promptContainer: {
		width: '100%',
		paddingHorizontal: 23,
	},
	buttonsContainer: {
		width: '100%',
	},
	promptText: {
		...text.body,
		fontSize: 16,
	},
	surveyButton: {
		marginHorizontal: 23,
		width: Dimensions.get('screen').width - 46,
		height: 50,
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
		color: colors.Black,
	},
	buttonTextSelected: {
		color: colors.White,
	},
	navContainer: {
		marginHorizontal: 23,
	},
});
