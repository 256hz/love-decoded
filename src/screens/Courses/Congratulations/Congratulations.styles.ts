import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.OrangeExtraLight,
	},
	waitContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	waitText: {
		...text.body,
	},
	contentContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 41,
	},
	congratulationsText: {
		...text.body,
		...text.bold,
		textAlign: 'center',
		fontSize: 18,
		lineHeight: 27,
	},
	buttonContainer: {
		backgroundColor: colors.Orange,
		width: 190,
		height: 41,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 24,
		shadowRadius: 4,
		shadowOpacity: 0.25,
		shadowColor: colors.Gray33,
		shadowOffset: {
			height: 4,
			width: 0,
		},
		elevation: 4,
	},
	buttonText: {
		...text.body,
		...text.bold,
		fontSize: 20,
		color: colors.White,
	},
});
