import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 64,
	},
	text: {
		...text.body,
		textAlign: 'center',
		fontSize: 19,
		lineHeight: 50,
	},
	bold: {
		...text.bold,
	},
	headline: {
		fontWeight: '700',
	},
	subtitle: {
		marginTop: 32,
		...text.body,
		textAlign: 'center',
		color: colors.Gray62,
	},
});
