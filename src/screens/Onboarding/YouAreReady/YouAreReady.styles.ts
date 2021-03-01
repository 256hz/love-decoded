import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

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
		marginTop: 16,
		marginBottom: 80,
	},
	buttonText: {
		...text.body,
		...text.bold,
		fontSize: 20,
		color: colors.White,
	},
});
