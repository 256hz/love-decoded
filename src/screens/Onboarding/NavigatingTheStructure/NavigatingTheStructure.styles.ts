import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

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
	textOrange: {
		color: colors.Orange,
	},
	textBold: {
		fontWeight: '700',
	},
	cards: {
		flex: 1,
		marginBottom: 64,
		marginTop: 16,
	},
	cardContainer: {
		flex: 1,
	},
	cardCenterBody: {
		justifyContent: 'center',
	},
	textBody: {
		...text.body,
		fontSize: 17,
	},
	textList: {
		marginBottom: 18,
	},
	footerText: {
		...text.body,
		...text.topText,
		color: colors.GrayTransparent073,
		marginTop: 8,
	},
});
