import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	titleContainerStyle: {
		marginBottom: 34,
	},
	container: {
		flexGrow: 1,
		paddingHorizontal: 33,
		justifyContent: 'space-around',
	},
	scoreLineContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		marginBottom: 9,
	},
	scoreHeadingContainer: {
		flex: 1,
	},
	scoreNumberContainer: {
		flex: 1,
		alignItems: 'flex-start',
	},
	scoreContainer: {
		backgroundColor: colors.White,
		borderRadius: 10,
		paddingHorizontal: 15,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		...text.body,
		fontSize: 16,
	},
	bold: {
		fontWeight: '700',
	},
});
