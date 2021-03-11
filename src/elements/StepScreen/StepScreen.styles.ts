import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
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
});
