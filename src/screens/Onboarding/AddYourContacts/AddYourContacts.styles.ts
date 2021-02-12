import colors from 'elements/globalStyles/color';
import text from 'elements/globalStyles/text';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	titleContainer: {
		marginBottom: 12,
	},
	container: {
		flex: 1,
	},
	text: {
		...text.body,
		fontSize: 17,
		lineHeight: 20,
		textAlign: 'center',
	},
	subtitleContainer: {
		marginTop: 30,
		marginBottom: 20,
		alignItems: 'center',
	},
	cardContainer: {
		paddingVertical: 32,
		flex: 1,
		margin: 32,
		borderRadius: 13,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.White,
	},
	selectedContactsContainer: {
		width: '100%',
		marginTop: 32,
	},
	selectedContactContainer: {
		width: '100%',
		// marginTop: 32,
	},
	selectedContactItemContainer: {
		width: '100%',
		height: 32,
		backgroundColor: colors.GrayTransparent028,
		borderRadius: 6,
	},
	selectedContactItemText: {
		...text.body,
		fontSize: 16,
	},
	boldText: {
		fontWeight: '500',
	},
	addMoreContainer: {
		flex: 1,
		alignItems: 'center',
	},
	addMoreButton: {
		paddingVertical: 16,
		paddingHorizontal: 32,
		marginVertical: 30,
		borderRadius: 13,
		alignItems: 'center',
		backgroundColor: colors.OrangeTransparent,
	},
	plusContainer: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderColor: colors.Black,
		borderWidth: 1.5,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	modalBackground: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.GrayTransparent028,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
