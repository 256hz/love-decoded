import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from 'elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		borderColor: colors.PinkTransparent,
		borderLeftWidth: 6,
		borderRadius: 10,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	selectedContainer: {
		backgroundColor: colors.OrangeLight,
	},
	nameText: {
		...text.body,
		fontSize: 22,
	},
	sectionContainer: {
		justifyContent: 'center',
		width: '100%',
		paddingVertical: 8,
	},
	sectionLabelText: {
		...text.body,
		fontSize: 15,
		textDecorationLine: 'underline',
	},
	sectionText: {
		...text.body,
		fontSize: 20,
	},
	headingText: {
		...text.body,
		...text.bold,
		fontSize: 15,
	},
});
