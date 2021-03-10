import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import ListTextInput, { SingleBullet } from '@elements/ListTextInput/ListTextInput';
import { StepScreens } from 'route/enums';
import styles from './Activities1.styles';

export default () => {
	const [ listOfLovableQualities, setListOfLovableQualities ] = useState(SingleBullet);

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
							{'Let\'s'} start by <Text style={styles.boldText}>creating a list of your loveable qualities</Text> which you can share.
						</Text>
					</View>

					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							Keep adding to your list and learning it.
						</Text>
					</View>

					<ListTextInput
						containerStyle={{ marginBottom: 32 }}
						text={listOfLovableQualities}
						setText={setListOfLovableQualities}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
