import { StyleSheet } from 'react-native';
import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 64,
	},
	headline: {
		...text.body,
		...text.headline,
		fontWeight: '400',
		fontSize: 20,
		lineHeight: 38,
	},
	highlight: {
		fontWeight: '700',
		color: colors.Orange,
	},
});
