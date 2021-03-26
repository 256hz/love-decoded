import colors from 'elements/globalStyles/color';
import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	logoContainer: {
		width: '100%',
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleLogoMargin: {
		marginTop: 0,
	},
	screenContainer: {
		flexGrow: 1,
		justifyContent: 'space-between',
	},
	titleContainer: {
		width: '100%',
		paddingHorizontal: 32,
		paddingTop: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontFamily: 'Rubik',
		fontSize: 20,
		lineHeight: 30,
		fontWeight: Platform.select({ ios: '500', android: 'bold' }),
		textAlign: 'center',
	},
	childrenContainer: {
		flexGrow: 1,
	},
	scrollIndicatorContainer: {
		position: 'absolute',
		width: 60,
		height: 60,
		bottom: 0,
		right: 0,
	},
	scrollIndicator: {
		position: 'absolute',
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: Platform.select({ android: colors.GrayF3, ios: colors.WhiteTransparent }),
		justifyContent: 'center',
		alignItems: 'center',
		shadowOpacity: 0.25,
		shadowColor: colors.Black,
		shadowOffset: { width: 2, height: 4 },
		shadowRadius: 4,
		elevation: 4,
	},
});
