import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	textInput: {
		flex: 1,
		...text.body,
		borderRadius: 6,
		borderColor: colors.White,
		backgroundColor: colors.White,
		borderWidth: 1,
		elevation: 4,
		shadowColor: colors.Black,
		shadowRadius: 3,
		shadowOpacity: 0.25,
		shadowOffset: {
			height: 4,
			width: 0,
		},
	},
});
