import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flexGrow: 1,
	},
	topContainer: {
		width: '100%',
		flexDirection: 'row',
	},
	iconContainer: {
		width: 22,
		height: 22,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconOverlay: {
		position: 'absolute',
		width: 22,
		height: 22,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconOverlay2: {
		position: 'absolute',
		width: 22,
		height: 22,
		left: -3,
		justifyContent: 'center',
	},
	divider: {
		width: '100%',
		height: 1,
		backgroundColor: colors.GrayBC,
		marginVertical: 16,
	},
	footerContainer: {
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		paddingVertical: 16,
		paddingRight: 28,
	},
});
