import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 36,
	},
	titleContainerStyle: {
		height: 0,
	},
	text: {
		...text.body,
		fontSize: 20,
		marginVertical: 27,
	},
	headlineText: {
		...text.body,
		...text.headline,
		fontSize: 29,
	},
	enterButtonContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',

	},
	enterButton: {
		width: '100%',
		height: 46,
		backgroundColor: colors.Orange,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 80,
	},
	buttonText: {
		...text.body,
		fontSize: 20,
		...text.bold,
		color: colors.White,
	},
});
