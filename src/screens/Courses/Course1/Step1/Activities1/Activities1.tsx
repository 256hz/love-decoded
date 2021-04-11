import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListTextInput, { SingleBullet } from '@elements/ListTextInput/ListTextInput';
import Info from '@assets/svg/info.svg';
import { Course1Step1Screens } from 'route/enums';
import { setStepActivityResponse } from '@redux/action';
import RootState from '@redux/RootState';
import { getStepActivity } from '@redux/selector';
import { Activities, Courses, Steps } from '@redux/types/survey';
import { StackKeyboardAvoidingView, StepScreen } from '@elements';
import styles from './Activities1.styles';

export default () => {
	const dispatch = useDispatch();

	const savedResponse = useSelector<RootState>(
		getStepActivity(Courses.One, Steps.One, Activities.LovableQualitiesSelf),
	);

	const setResponse = (text: string) => {
		dispatch(setStepActivityResponse(Courses.One, Steps.One, Activities.LovableQualitiesSelf, text));
	};

	const onPressInfoBubble = () => {
		console.log('info');
	};

	return (
		<StackKeyboardAvoidingView>
			<StepScreen
				nextTarget={Course1Step1Screens.Activities2}
			// audioFilename="one_second_silence.mp3"
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

						<View style={[ styles.textItemContainer, styles.row ]}>
							<Text style={styles.textNote}>Hit Enter to close the keyboard.</Text>
						</View>

						<ListTextInput
							containerStyle={styles.textInputContainer}
							text={savedResponse as string || SingleBullet}
							setText={setResponse}
						/>
					</View>
				</View>
			</StepScreen>
		</StackKeyboardAvoidingView>
	);
};
