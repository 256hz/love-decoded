import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.White,
		paddingHorizontal: 16,
	},
	headerContainer: {
		width: '100%',
		height: 87,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerIconContainer: {
		height: '100%',
		paddingHorizontal: 32,
		justifyContent: 'center',
	},
	childrenContainer: {
		flexGrow: 1,
	},
});
