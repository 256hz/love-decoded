import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {

	},
	topContainer: {
		width: '100%',
		flexDirection: 'row',
	},
	profileContainer: {
		width: 250,
		height: 150,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dotsContainer: {
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	profileImageContainer: {
		width: 100,
		height: 100,
		borderRadius: 50,
		overflow: 'hidden',
	},
});
