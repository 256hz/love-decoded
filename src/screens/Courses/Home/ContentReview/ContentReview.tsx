import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { getUserProgress } from '@redux/selector';
import DownArrow2 from '@assets/svg/down-arrow-2.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ContentReview.styles';


export default () => {
	const { navigate } = useNavigation();
	const { currentActivity, currentDay, currentStep } = useSelector(getUserProgress);

	const onPress = () => {

	};

	return (
		<View style={styles.container}>

			<View style={styles.titleContainer}>
				<Text style={styles.headline}>
					Content Review
				</Text>
			</View>

			<TouchableOpacity onPress={onPress}>
				<View style={styles.chooserContainer}>
					<Text style={styles.subtitle}>
						Choose a Step
					</Text>
					<DownArrow2 />
				</View>
			</TouchableOpacity>

			<View style={styles.buttonRowContainer}>
				<TouchableOpacity onPress={onPress}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>
							GO
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
