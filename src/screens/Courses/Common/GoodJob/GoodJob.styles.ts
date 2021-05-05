import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 32,
		paddingVertical: 16,
		backgroundColor: colors.White,
	},
	checkCircleContainer: {
		height: 95,
		width: 95,
		marginBottom: 17,
	},
	checkCircle: {
		flex: 1,
		borderRadius: 47.5,
		borderWidth: 3,
		borderColor: colors.Green,
	},
	checkContainer: {
		position: 'absolute',
		top: 20,
		left: 15,
	},
	goodJobText: {
		...text.body,
		...text.bold,
		fontSize: 30,
		lineHeight: 30,
		color: colors.Green,
		marginBottom: 30,
	},
	headlineText: {
		...text.body,
		...text.bold,
		fontSize: 20,
		lineHeight: 24,
		marginBottom: 30,
		textAlign: 'center',
	},
	bodyText: {
		...text.body,
		fontSize: 17,
		lineHeight: 20,
		color: colors.Gray92,
		marginBottom: 30,
		textAlign: 'center',
	},
	nextButton: {
		width: 192,
		height: 46,
		borderRadius: 10,
		backgroundColor: colors.Orange,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		...text.body,
		fontSize: 18,
		color: colors.White,
		fontWeight: '700',
	},
});
