import React from 'react';
import { View, Text, Image } from 'react-native';
import { StepScreen } from '@elements';
import { CourseScreens } from 'route/enums';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Activities3.styles';

export default () => {
	const onPress = () => {
		console.log('share');
	};

	return (
		<StepScreen
			// audioFilename="one_second_silence.mp3"
			nextTarget={CourseScreens.GoodJob}
			// scrollDisabled
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Becoming aware of some their unloving behaviors  will support their own respective journeys toward having a healthy, loving relationship with themselves.
						</Text>

						<Text style={styles.bodyText}>
							Sharing your unloveable qualities with people close to you will help them become aware of their own  and interested in transforming them.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, styles.boldText ]}>
							Invite feedback from friends and family every day.  Share your list now!
						</Text>
					</View>

					<TouchableOpacity onPress={onPress}>
						<View style={styles.shareContainer}>
							<View style={styles.shareItem}>
								<Image source={require('@assets/png/sms.png')} />
								<Text style={styles.bodyText}>sms</Text>
							</View>

							<View style={styles.shareItem}>
								<Image source={require('@assets/png/email.png')} />
								<Text style={styles.bodyText}>email</Text>
							</View>

							<View style={styles.shareItem}>
								<Image source={require('@assets/png/notes.png')} />
								<Text style={styles.bodyText}>notes</Text>
							</View>
						</View>
					</TouchableOpacity>

					<View>
						<Text style={[ styles.bodyText, styles.boldText ]}>
							Spend at least 1 week on this exercise.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};
