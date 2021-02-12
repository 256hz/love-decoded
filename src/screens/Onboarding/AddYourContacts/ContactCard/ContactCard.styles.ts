import { StyleSheet } from 'react-native';
import text from 'elements/globalStyles/text';

export default StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	nameText: {
		...text.body,
		fontSize: 22,
	},
	sectionContainer: {
		justifyContent: 'center',
		width: '100%',
		paddingVertical: 8,
	},
	sectionLabelText: {
		...text.body,
		fontSize: 20,
	},
	sectionText: {
		...text.body,
		fontSize: 16,
	},
	headingText: {
		...text.body,
		...text.headline,
	},
});
