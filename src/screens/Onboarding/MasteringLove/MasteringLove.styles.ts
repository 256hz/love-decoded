import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	bodyContainer: {
		marginVertical: 16,
		paddingHorizontal: 59,
	},
	bodyText: {
		...text.body,
		fontSize: 15,
		textAlign: 'center',
	},
	headline: {
		...text.body,
		...text.headline,
		fontWeight: '400',
		fontSize: 20,
		lineHeight: 38,
	},
	highlight: {
		fontWeight: '700',
		color: colors.Orange,
	},
	allTrianglesContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	triangleContainer: {
		alignItems: 'center',
		width: '100%',
		marginBottom: -1,
	},
	triangleTextContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	triangleText: {
		...text.body,
		color: colors.White,
		fontSize: 14,
		fontWeight: '700',
		textShadowColor: colors.Black,
		textShadowRadius: 3,
	},
});
