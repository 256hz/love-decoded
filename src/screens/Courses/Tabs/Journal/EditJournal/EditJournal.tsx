import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import IconImage from '@assets/svg/icon-image.svg';
import IconCamera from '@assets/svg/icon-camera.svg';
import IconMicrophone from '@assets/svg/icon-microphone.svg';
import { setJournal } from '@redux/action';
import { getJournal, getUserProgressNumbers } from '@redux/selector';
import colors from '@elements/globalStyles/color';
import { JournalScreens } from 'route/enums';
import styles from './EditJournal.styles';

enum Attachments {
	Image = 'image',
	Microphone = 'microphone',
	TakePicture = 'take_picture',
}

export default () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const { currentStepNumber, currentDayNumber } = useSelector(getUserProgressNumbers);
	const { journalTitle, journalText } = useSelector(getJournal(currentStepNumber, currentDayNumber));
	const [ tempJournalTitle, setTempJournalTitle ] = useState(journalTitle || '');
	const [ tempJournalText, setTempJournalText ] = useState(journalText || '');

	const addAttachment = (type: Attachments) => {
		console.log(`add attachment via: ${type}`);
	};

	const onSave = () => {
		dispatch(setJournal(currentStepNumber, currentDayNumber, tempJournalText, tempJournalTitle));
		navigate(JournalScreens.Root);
	};

	const onShare = () => {
		console.log('share');
	};

	const onPrint = () => {
		console.log('print');
	};

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Title
					</Text>
				</View>

				<TextInput
					multiline
					onChangeText={setTempJournalTitle}
					placeholder="Add a title to this entry"
					placeholderTextColor={colors.GrayBC}
					style={styles.textInput}
					value={tempJournalTitle}
				/>

				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Story
					</Text>
				</View>

				<TextInput
					multiline
					onChangeText={setTempJournalText}
					placeholder="Write something"
					placeholderTextColor={colors.GrayBC}
					style={styles.textInput}
					value={tempJournalText}
				/>

				<View style={styles.iconsContainer}>
					<AttachmentButton
						onPress={() => addAttachment(Attachments.TakePicture)}
						svg={<IconCamera />}
					/>


					<AttachmentButton
						onPress={() => addAttachment(Attachments.Image)}
						svg={<IconImage />}
					/>


					<AttachmentButton
						onPress={() => addAttachment(Attachments.Microphone)}
						svg={<IconMicrophone />}
					/>

				</View>

			</View>

			<View style={styles.buttonsContainer}>
				<Button label="Save" onPress={onSave} />

				<Button label="Share" onPress={onShare} />

				<Button label="Print" onPress={onPrint} />
			</View>
		</View>
	);
};

const AttachmentButton = ({ svg, onPress }) => (
	<TouchableOpacity
		style={styles.iconContainer}
		onPress={onPress}
	>
		{svg}
	</TouchableOpacity>
);

const Button = ({ label, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.buttonContainer}>
			<Text style={styles.buttonText}>
				{label}
			</Text>
		</View>
	</TouchableOpacity>
);
