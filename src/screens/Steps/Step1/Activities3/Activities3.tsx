import React from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import { StepScreens } from 'route/enums';
import styles from './Activities3.styles';

export default () => {

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={StepScreens.GoodJob}
			// scrollDisabled
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Invite feedback from friends and family every day. You will spend one week on this step. Sharing your list helps you learn.
						</Text>
					</View>

					<View style={styles.shareContainer} />
				</View>
			</View>
		</StepScreen>
	);
};
