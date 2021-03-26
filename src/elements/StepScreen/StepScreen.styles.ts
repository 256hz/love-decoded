import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: colors.White,
	},
	childrenContainer: {
		flexGrow: 1,
	},
	middleContainer: {
		flex: 1,
	},
	scrollIndicatorContainer: {
		position: 'absolute',
		width: 40,
		height: 40,
		borderRadius: 20,
		bottom: 20,
		right: 20,
		backgroundColor: colors.PinkVeryLightTransparent,
		zIndex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOpacity: 0.25,
		shadowColor: colors.Black,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 4,
		elevation: 4,
	},
});
