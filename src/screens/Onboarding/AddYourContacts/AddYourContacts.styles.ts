import colors from '@elements/globalStyles/color';
import text from '@elements/globalStyles/text';
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
	selectedContactsContainer: {
		marginTop: 32,
		marginHorizontal: 32,
	},
	selectedContactContainer: {
		width: '100%',
	},
	selectedContactItemContainer: {
		width: '100%',
		backgroundColor: colors.WhiteMoreTransparent,
		borderRadius: 10,
	},
	selectedContactItemText: {
		...text.body,
		fontSize: 16,
	},
	boldText: {
		...text.bold,
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
		flex: 1,
		paddingVertical: 64,
		paddingHorizontal: 32,
		backgroundColor: colors.GrayTransparent073,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scrollContainer: {
		width: '100%',
		padding: 20,
	},
	contactsBackContainer: {
		width: '100%',
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 6,
		marginLeft: 16,
		alignItems: 'center',
	},
	backText: {
		...text.body,
		fontSize: 16,
		color: colors.PinkTransparent,
	},
	cardsContainer: {
		borderRadius: 13,
		backgroundColor: colors.White,
		width: '100%',
	},
	loadingContainer: {
		width: '100%',
		alignItems: 'center',
		marginBottom: 14,
	},
	spinner: {
		height: 28,
		width: 28,
		marginHorizontal: 16,
	},
	cardContainer: {
		alignItems: 'center',
		width: '100%',
	},
	dividerContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
	},
	divider: {
		height: 1,
		width: '100%',
	},
});
