import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import ListTextInput, { SingleBullet } from '@elements/ListTextInput/ListTextInput';
import { StepScreens } from 'route/enums';
import styles from './Activities2.styles';

export default () => {
	const [ missingQualities, setMissingQualities ] = useState(SingleBullet);
	const [ disagreeQualities, setDisagreeQualities ] = useState(SingleBullet);

	return (
		<StepScreen
			hideHeader
			nextTarget={StepScreens.Step1Activities2}
			title="List of Lovable Qualities"
			subtitle="Activities"
			// scrollDisabled
		>
			<View style={styles.container}>

				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Which loveable qualities do others think are missing from your list?
						</Text>
					</View>

					<ListTextInput
						containerStyle={{ marginBottom: 16 }}
						text={missingQualities}
						setText={setMissingQualities}
					/>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Which loveable qualities on your list do others not agree with?
						</Text>
					</View>

					<ListTextInput
						containerStyle={{ marginBottom: 16 }}
						text={disagreeQualities}
						setText={setDisagreeQualities}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
