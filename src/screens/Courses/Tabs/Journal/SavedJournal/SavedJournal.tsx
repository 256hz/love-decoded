import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { DayNumber, StepNumber } from '@redux/types/user';
import { getJournal } from '@redux/selector';
import LinearGradient from 'react-native-linear-gradient';
import colors from 'elements/globalStyles/color';
import { JournalScreens } from 'route/enums';
import styles from './SavedJournal.styles';

type Props = {
	stepNumber: StepNumber,
	dayNumber: DayNumber
};

export default ({ stepNumber, dayNumber }: Props) => {
	const { navigate } = useNavigation();
	const { title, text } = useSelector(getJournal(stepNumber, dayNumber));

	const onPress = () => {
		navigate(JournalScreens.Edit, { stepNumber, dayNumber });
	};

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View style={styles.titleContainer}>
				{
					title && (
						<View style={styles.subtitleContainer}>
							<Text style={styles.subtitleText}>
								{title}
							</Text>
						</View>
					)
				}

				<Text style={styles.titleText}>
					Step {stepNumber}, Day {dayNumber}
				</Text>
			</View>


			<Text style={styles.text}>
				{text}
			</Text>
			<LinearGradient
				colors={[ colors.Transparent, colors.White ]}
				style={styles.gradient}
			/>
		</TouchableOpacity>
	);
};
