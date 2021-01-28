import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	titleContainerStyle: {
		marginBottom: 34,
	},
	container: {
		flexGrow: 1,
		paddingTop: 100,
		paddingHorizontal: 33,
		justifyContent: 'space-between',
	},
	scoreLineContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	scoreContainer: {
		backgroundColor: colors.White,
		marginLeft: 10,
		borderRadius: 10,
		paddingHorizontal: 15,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		...text.body,
	},
	bold: {
		fontWeight: '700',
		// lineHeight: 45,
	},
});
