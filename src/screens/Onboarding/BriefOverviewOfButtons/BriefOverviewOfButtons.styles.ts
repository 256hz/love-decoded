import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	buttonContainer: {
		width: '100%',
		marginTop: 16,
		flexDirection: 'row',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 12,
	},
	iconAndTextContainer: {
		flex: 1,
		marginLeft: 24,
		marginRight: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconText: {
		...text.body,
		fontSize: 14,
		lineHeight: 14,
		textAlign: 'center',
	},
	textContainer: {
		width: '70%',
		paddingRight: 32,
	},
	text: {
		...text.body,
		fontSize: 14,
		lineHeight: 16,
	},
	journalSpace: {
		height: '100%',
		width: 4,
	},
	dotSpace: {
		height: '100%',
		width: 3,
	},
});
