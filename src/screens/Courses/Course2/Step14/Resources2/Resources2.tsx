import React from 'react';
import { Text, View } from 'react-native';
import { CourseCommonScreens } from 'route/enums';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import { AudioPlayerNavigator } from '@elements';
import styles from './Resources2.styles';

export default ({ navigation }) => {
	const onClose = () => navigation.pop(2);

	return (
		<ResourcesScreen
			onClose={onClose}
			navigation={navigation}
			scrollDisabled
		>
			<View style={styles.container}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitleText}>
						Self-Talk Awareness
					</Text>
				</View>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitleText}>
						Catching people doing/saying something that feels good.
					</Text>
				</View>

				<AudioPlayerNavigator
					audioFilename="one_second_silence.mp3"
					backEnabled
					hideNextButton
					nextTarget={CourseCommonScreens.None}
				/>
			</View>
		</ResourcesScreen>
	);
};
