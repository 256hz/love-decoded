import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import ListTextInput, { SingleBullet } from '@elements/ListTextInput/ListTextInput';
import { StepScreens } from 'route/enums';
import styles from './Activities3.styles';

export default () => {
	const [ missingQualities, setMissingQualities ] = useState(SingleBullet);
	const [ disagreeQualities, setDisagreeQualities ] = useState(SingleBullet);

	return (
		<StepScreen
			audioFilename="one_second_silence.mp3"
			nextTarget={StepScreens.Step1Activities2}
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
