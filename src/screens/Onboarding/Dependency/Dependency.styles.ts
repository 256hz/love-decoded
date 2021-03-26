import { StyleSheet } from 'react-native';
import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 39,
	},
	titleContainer: {
		paddingBottom: 32,
	},
	textContainer: {
		marginBottom: 16,
		flex: 1,
	},
	body: {
		...text.body,
		fontSize: 19,
		textAlign: 'center',
	},
	headline: {
		...text.body,
		...text.headline,
		fontSize: 19,
	},
	highlight: {
		marginTop: 12,
		fontSize: 19,
		fontWeight: '700',
		color: colors.Orange,
	},
	bold: {
		fontWeight: '700',
	},
	subtitle: {
		...text.body,
		fontSize: 17,
		fontWeight: '700',
		textAlign: 'center',
		marginBottom: 30,
	},
	radioButtonsContainer: {
		width: '100%',
		marginVertical: 16,
		alignItems: 'center',
		flex: 1,
	},
});
