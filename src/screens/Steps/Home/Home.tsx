import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StepScreen } from '@elements';
import { getUserFirstName, getUserProgress } from '@redux/selector';
import styles from './Home.styles';

export default () => {
	const { navigate } = useNavigation();
	const onPress = () => navigate('');

	const { currentActivity, currentDay, currentStep } = useSelector(getUserProgress);
	const firstName = useSelector(getUserFirstName);

	return (
		<StepScreen>
			<View style={styles.container}>

				<View style={styles.titleContainer}>
					<Text style={styles.headline}>
						Good Morning {firstName}
					</Text>
				</View>

				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitle}>
						{'Today\'s Progress'}
					</Text>
				</View>

				<View style={styles.progressTextContainer}>
					<Text style={styles.progressText}>
						Step {currentStep} - Day {currentDay}
					</Text>
					<Text style={styles.showMore}>
						show more
					</Text>
				</View>

				<ProgressBar progress={0.5} />

				<CourseButton onPress={onPress} />
			</View>
		</StepScreen>
	);
};

const ProgressBar = ({ progress }) => (
	<View style={styles.progressBarContainer}>
		<View style={styles.emptyProgressBar} />
		<View style={[ styles.progress, { width: `${Math.round(progress * 100)}%` } ]} />
	</View>
);

const CourseButton = ({ onPress }) => (
	<View style={styles.buttonContainer}>
		<TouchableOpacity onPress={onPress}>
			<View style={styles.courseButton}>
				<Text style={styles.buttonText}>
					Go To Course
				</Text>
			</View>
		</TouchableOpacity>
	</View>
);
