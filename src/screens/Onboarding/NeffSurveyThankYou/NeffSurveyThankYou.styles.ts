import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	titleContainerStyle: {
		marginBottom: 34,
	},
	container: {
		flexGrow: 1,
		paddingHorizontal: 33,
		justifyContent: 'space-between',
	},
	text: {
		...text.body,
	},
	bold: {
		fontWeight: '700',
		lineHeight: 45,
	},
	headline: {
		...text.body,
		fontSize: 20,
		fontWeight: '500',
	},
	middleContainer: {
		flex: 1,
		minHeight: 200,
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
		height: 220,
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
});
