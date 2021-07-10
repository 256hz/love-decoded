import colors from '@elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	heroImage: {
		width: '100%',
		height: '100%',
	},
	subTitlesContainer: {
		alignItems: 'center',
		position: 'absolute',
		bottom: 25,
		width: '100%',
	},
	subTitleContainer: {
		borderRadius: 15,
		paddingHorizontal: 32,
		paddingVertical: 12,
		marginTop: 12,
	},
	subTitleLeft: {
		backgroundColor: colors.RedTransparent,
	},
	subTitleRight: {
		backgroundColor: colors.PinkTransparent,
	},
	subTitleText: {
		fontFamily: 'Rubik',
		fontWeight: '700',
		fontSize: 18,
		color: 'white',
		textAlign: 'center',
		textShadowColor: colors.Gray33,
		textShadowOffset: {
			width: -1,
			height: 2,
		},
		textShadowRadius: 4,
	},
	enterButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	enterButton: {
		width: 102,
		height: 35,
		backgroundColor: colors.Orange,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	loginButton: {
		backgroundColor: colors.OrangeButton,
	},
	disabled: {
		backgroundColor: colors.GrayTransparent073,
	},
	buttonText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 15,
		marginHorizontal: 5,
	},
});
