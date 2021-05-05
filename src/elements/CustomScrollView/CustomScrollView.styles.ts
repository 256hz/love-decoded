import colors from '@elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
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
		backgroundColor: colors.GrayF3,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOpacity: 0.25,
		shadowColor: colors.Black,
		shadowOffset: {
			width: 2,
			height: 4,
		},
		shadowRadius: 4,
		elevation: 4,
	},
});
