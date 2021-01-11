import colors from 'elements/globalStyles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	subTitleContainer: {
		position: 'absolute',
		width: 160,
		height: 160,
		borderRadius: 80,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	subTitleLeft: {
		left: 40,
		bottom: 40,
		backgroundColor: colors.Red,
	},
	subTitleRight: {
		right: 40,
		bottom: 0,
		backgroundColor: colors.Pink,
	},
	subTitleText: {
		fontFamily: 'Rubik',
		fontWeight: '700',
		fontSize: 18,
		marginHorizontal: 5,
		color: 'white',
		textAlign: 'center',
		textShadowColor: colors.Gray33,
		textShadowOffset: { width: -1, height: 2 },
		textShadowRadius: 4,
	},
	enterButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	enterButton: {
		width: 102,
		height: 35,
		marginTop: 15,
		backgroundColor: colors.Orange,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	buttonText: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		fontSize: 15,
		marginHorizontal: 5,
	},
});
