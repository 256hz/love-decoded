import { StyleSheet } from 'react-native';
import text from '@elements/globalStyles/text';
import colors from '@elements/globalStyles/color';

export default StyleSheet.create({
	titleContainerStyle: {
		paddingTop: '10%',
		paddingHorizontal: 60,
		marginBottom: 39,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 28,
	},
	radioButtonContainer: {
		flex: 1,
		alignItems: 'center',
	},
	radioButtonContainerStyle: {
		justifyContent: 'center',
	},
	text: {
		...text.body,
		fontSize: 19,
		lineHeight: 23,
		textAlign: 'center',
	},
	bold: {
		...text.body,
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '700',
	},
	bottomContainer: {
		height: 200,
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
