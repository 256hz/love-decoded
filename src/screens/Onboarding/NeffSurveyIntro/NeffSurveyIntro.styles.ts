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
		justifyContent: 'center',
		alignItems: 'center',
	},
	surveyButton: {
		height: 35,
		marginTop: 15,
		backgroundColor: colors.OrangeTransparent,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	buttonText: {
		fontFamily: 'Rubik',
		fontWeight: '500',
		fontSize: 18,
		marginHorizontal: 21,
	},
});
