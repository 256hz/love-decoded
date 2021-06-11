import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 14,
		borderBottomColor: colors.GrayC4,
		borderBottomWidth: 1,
	},
	textContainer: {
		width: '75%',
		paddingLeft: 24,
	},
	text: {
		...text.body,
	},
	arrowContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 34,
	},
});
