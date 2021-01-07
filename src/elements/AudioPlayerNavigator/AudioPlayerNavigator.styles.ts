import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: '100%',
		height: 250,
		alignSelf: 'flex-end',
	},
	playerContainer: {
		width: '100%',
	},
	topButtonsContainer: {
		width: '100%',
		height: 30,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	playButtonContainer: {
		width: 50,
		height: 50,
		borderRadius: 5,
		backgroundColor: 'yellow',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: 'Rubik',
		fontWeight: '400',
	},
});
