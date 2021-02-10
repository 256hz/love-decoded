import { StyleSheet } from 'react-native';
import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	topTextContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
		paddingHorizontal: 39,
	},
	topText: {
		...text.body,
		fontSize: 18,
	},
	highlight: {
		...text.body,
		...text.highlight,
		fontSize: 17,
	},
	boldText: {
		fontWeight: '700',
	},
	cards: {
		flex: 1,
		marginTop: 16,
	},
	footerText: {
		...text.body,
		...text.topText,
		fontSize: 16,
		color: colors.Gray62,
		marginTop: 8,
	},
});
