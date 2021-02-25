import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	dotContainer: {
		marginHorizontal: 4,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: colors.Orange,
	},
	inactiveDot: {
		backgroundColor: 'white',
		opacity: 1,
	},
});
