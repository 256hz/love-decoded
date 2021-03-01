import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingTop: 34,
	},
	container: {
		flex: 1,
		paddingTop: 126,
		paddingHorizontal: 42,
	},
	text: {
		...text.body,
		fontSize: 19,
		lineHeight: 28,
		textAlign: 'center',
	},
	surveyButtonContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	surveyButton: {
		height: 35,
		backgroundColor: colors.OrangeButton,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	disabled: {
		backgroundColor: colors.GrayButton,
	},
	buttonText: {
		fontFamily: 'Rubik',
		...text.bold,
		fontSize: 18,
		marginHorizontal: 21,
	},
});
