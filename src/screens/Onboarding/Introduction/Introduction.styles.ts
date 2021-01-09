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
	subTitleText: {
		fontFamily: 'Rubik',
		fontWeight: '700',
		fontSize: 18,
		marginHorizontal: 5,
		color: 'white',
		textAlign: 'center',
		textShadowColor: '#333',
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
		backgroundColor: '#F1751B',
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
