import { StyleSheet } from 'react-native';
import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	topTextContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
		paddingHorizontal: 64,
	},
	topText: {
		...text.body,
		...text.topText,
		fontSize: 17,
	},
	highlight: {
		...text.body,
		...text.highlight,
		fontSize: 17,
	},
	cards: {
		flex: 1,
		marginTop: 16,
	},
	footerText: {
		...text.body,
		...text.topText,
		color: colors.GrayTransparent073,
		marginTop: 8,
	},
});
