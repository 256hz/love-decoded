import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingBottom: 30,
	},
	container: {
		flex: 1,
		paddingHorizontal: 32,
		justifyContent: 'space-around',
	},
	frustratedTitleContainerStyle: {
		paddingTop: 32,
	},
	text: {
		...text.body,
		fontSize: 16,
		lineHeight: 24,
		textAlign: 'center',
	},
	bottomContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	navButton: {
		height: 35,
		backgroundColor: colors.Orange,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 8,
		paddingHorizontal: 25,
	},
	navButtonText: {
		fontSize: 16,
		...text.bold,
		color: colors.White,
	},
	disabled: {
		backgroundColor: colors.GrayButton,
	},
});
