import colors from 'elements/globalStyles/color';
import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
	multiSelectContainer: {
		width: '100%',
		paddingVertical: 8,
	},
	multiSelectContainerStyle: {
		alignItems: 'center',
		paddingBottom: 32,
	},
	selectionContainer: {
		marginVertical: 8,
		paddingHorizontal: 32,
		height: 52,
		minWidth: 170,
		borderRadius: 15,
		justifyContent: 'center',
	},
	selectionText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 21,
		textAlign: 'center',
	},
	selected: {
		backgroundColor: colors.OrangeTransparent,
	},
	keyboardPadding: {
		paddingBottom: Platform.select({ android: 300 }),
	},
});
