import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		marginTop: 23,
		marginBottom: 20,
	},
	headline: {
		...text.body,
		...text.bold,
		fontSize: 24,
	},
	subtitleContainer: {
		marginBottom: 12,
	},
	subtitle: {
		...text.body,
		...text.bold,
		color: colors.Orange,
		fontSize: 19,
		lineHeight: 24,
	},
	progressTextContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 12,
	},
	progressText: {
		...text.body,
		...text.bold,
	},
	showMore: {
		...text.body,
		color: colors.Orange,
	},
	progressBarContainer: {
		marginBottom: 14,
	},
	emptyProgressBar: {
		width: '100%',
		height: 26,
		borderRadius: 6,
		backgroundColor: colors.GrayF3,
	},
	progress: {
		position: 'absolute',
		left: 0,
		height: 26,
		borderRadius: 6,
		backgroundColor: colors.Orange,
	},
	buttonContainer: {
		width: '100%',
		marginBottom: 12,
	},
	courseButton: {
		width: '100%',
		height: 43.77,
		backgroundColor: colors.Orange,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
	},
	buttonText: {
		...text.body,
		...text.bold,
		fontSize: 17,
		color: colors.White,
	},
});
