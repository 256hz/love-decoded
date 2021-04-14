import React from 'react';
import { View, Text } from 'react-native';
import { Course1Step2Screens } from 'route/Steps/Course1Screens';

import { AudioPlayerNavigator, StackKeyboardAvoidingView, StepScreen } from '@elements';
import styles from './Activities1.styles';

export default () => {
	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				nextTarget={Course1Step2Screens.Activities2}
				// scrollDisabled
			>
				<View style={styles.container}>
					<View style={styles.bodyContainer}>
						<View />

						<View>
							<View style={styles.textItemContainer}>
								<Text style={styles.bodyText}>
									When we don’t love ourselves like we deserve - we put up with our own unloving behavior without even realizing it.
								</Text>
							</View>

							<AudioPlayerNavigator
								audioFilename="step2_activities1.mp3"
								customButtons={<></>}
							/>
						</View>

						<View>
							<View style={styles.textItemContainer}>
								<Text style={styles.bodyText}>
									Start listening to the way you talk to yourself.
								</Text>
							</View>
							<AudioPlayerNavigator
								audioFilename="step2_activities1.mp3"
								customButtons={<></>}
							/>
						</View>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
