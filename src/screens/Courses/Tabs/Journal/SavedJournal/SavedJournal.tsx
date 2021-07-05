import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { DayNumber, StepNumber } from '@redux/types/user';
import { getJournal } from '@redux/selector';
import styles from './SavedJournal.styles';

type Props = {
	stepNumber: StepNumber,
	dayNumber: DayNumber
};

export default ({ stepNumber, dayNumber }: Props) => {
	const { navigate } = useNavigation();
	const { journalTitle, journalText } = useSelector(getJournal(stepNumber, dayNumber));

	const onPress = () => {
		navigate('');
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Step {stepNumber}, Day {dayNumber}
					</Text>
				</View>

				{
					journalTitle && (
						<View style={styles.subtitleContainer}>
							<Text style={styles.subtitleText}>
								{journalTitle}
							</Text>
						</View>
					)
				}

				<Text style={styles.journalText}>
					{journalText}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
