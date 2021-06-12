import { StyleSheet } from 'react-native';
import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		paddingTop: 28,
		paddingBottom: 22,
		paddingLeft: 24,
	},
	titleText: {
		...text.body,
		...text.bold,
		fontSize: 21,
		lineHeight: 21,
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 42,
	},
	text: {
		...text.body,
		fontSize: 16,
		lineHeight: 24,
		textAlign: 'center',
	},
	buttonsContainer: {
		flex: 1,
		justifyContent: 'space-around',
		padding: 42,
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
	bottomContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});
