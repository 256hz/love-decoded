import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	kavContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	topTextContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
	},
	topText: {
		...text.body,
		marginHorizontal: 5,
		textAlign: 'center',
	},
	subtitleContainer: {
		marginVertical: 15,
		alignItems: 'center',
	},
});
