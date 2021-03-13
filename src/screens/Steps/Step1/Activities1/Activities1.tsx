import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import ListTextInput, { SingleBullet } from '@elements/ListTextInput/ListTextInput';
import Info from '@assets/svg/info.svg';
import { StepScreens } from 'route/enums';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Activities1.styles';

export default () => {
	const [ listOfLovableQualities, setListOfLovableQualities ] = useState(SingleBullet);

	const onPressInfoBubble = () => {
		console.log('info');
	};

	return (
		<StepScreen
			nextTarget={StepScreens.Step1Activities2}
			audioFilename="one_second_silence.mp3"
			// scrollDisabled
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					<View style={styles.textItemContainer}>
						<Text style={styles.bodyText}>
							{'Let\'s'} start by <Text style={styles.boldText}>creating a list of your loveable qualities</Text> which you can share.
						</Text>
					</View>

					<View style={[ styles.textItemContainer, styles.row ]}>
						<Text style={styles.bodyText}>
							Keep adding to your list and learning it.
						</Text>

						<TouchableOpacity onPress={onPressInfoBubble}>
							<View style={styles.infoBubble}>
								<Info />
							</View>
						</TouchableOpacity>
					</View>

					<ListTextInput
						containerStyle={styles.textInputContainer}
						text={listOfLovableQualities}
						setText={setListOfLovableQualities}
					/>
				</View>
			</View>
		</StepScreen>
	);
};
