import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	background: {
		flex: 1,
	},
	children: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
	},
});
