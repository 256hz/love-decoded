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
});
