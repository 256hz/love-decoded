import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: 250,
		height: 150,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 48,
	},
	imageContainer: {
		width: 100,
		height: 100,
		borderRadius: 50,
		overflow: 'hidden',
		marginBottom: 12,
	},
	nameText: {
		...text.body,
		...text.bold,
		fontSize: 20,
		lineHeight: 21,
		textAlign: 'center',
	},
	progressText: {
		...text.body,
		...text.bold,
		fontSize: 12,
		lineHeight: 21,
		color: colors.Orange,
		textAlign: 'center',
	},
	emailText: {
		...text.body,
		fontSize: 14,
		lineHeight: 21,
		textAlign: 'center',
		color: colors.Gray62,
	},
});
