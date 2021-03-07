import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		justifyContent: 'space-between',
	},
	textContainer: {
		marginTop: 30,
		marginBottom: 45,
	},
	body: {
		...text.body,
		fontSize: 17,
		textAlign: 'center',
	},
	headline: {
		...text.body,
		...text.headline,
	},
	highlight: {
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
		// justifyContent: 'center',
		alignItems: 'center',
	},
	radioButtonsStyle: {
		// justifyContent: 'center',
		// alignItems: 'center',
	},
});
