import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	titleContainerStyle: {
		marginBottom: 34,
	},
	container: {
		flex: 1,
		paddingHorizontal: 33,
		justifyContent: 'space-between',
	},
	text: {
		...text.body,
	},
	bold: {
		...text.bold,
		marginTop: 12,
	},
	headline: {
		...text.body,
		fontSize: 20,
		...text.bold,
	},
	middleContainer: {
		flex: 1,
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scoreContainer: {
		backgroundColor: colors.White,
		width: 65,
		height: 50,
		borderRadius: 13,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 16,
	},
	bottomContainer: {
		height: 140,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 32,
	},
	navButton: {
		width: 102,
		height: 35,
		backgroundColor: colors.OrangeTransparent,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 16,
	},
	navButtonText: {
		marginRight: 5,
	},
	scoreExplanationContainer: {
		marginBottom: 16,
	},
});
