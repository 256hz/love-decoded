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
	selectionContainer: {
		borderRadius: 15,
		marginVertical: 8,
		marginHorizontal: 16,
		paddingVertical: 20,
		paddingHorizontal: 32,
		justifyContent: 'center',
	},
	selectionText: {
		...text.body,
		fontSize: 19,
		textAlign: 'center',
	},
	subtitleContainer: {
		marginTop: 30,
		alignItems: 'center',
		marginBottom: 12,
	},
});
