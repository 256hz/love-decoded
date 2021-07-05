import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import JournalSq1 from '@assets/svg/journal-sq-1.svg';
import JournalSq2 from '@assets/svg/journal-sq-2.svg';
import JournalSq3 from '@assets/svg/journal-sq-3.svg';
import { getJournal, getJournalHistory, getUserProgressNumbers } from '@redux/selector';
import { StepScreen } from '@elements';
import { JournalScreens } from 'route/enums';
import styles from './Journal.styles';
import SavedJournal from './SavedJournal';

export default () => {
	const { navigate } = useNavigation();
	const { currentStepNumber, currentDayNumber } = useSelector(getUserProgressNumbers);
	const { title, text } = useSelector(getJournal(currentStepNumber, currentDayNumber));
	const journalHistory = useSelector(getJournalHistory);

	const viewAll = () => { navigate(JournalScreens.Root); };

	const editJournal = () => { navigate(JournalScreens.Edit); };

	return (
		<StepScreen containerStyle={styles.container}>
			<>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Journal
					</Text>

					<View>
						<View style={styles.sq1}>
							<JournalSq3 />
						</View>

						<View style={styles.sq2}>
							<JournalSq1 />
						</View>

						<View style={styles.sq3}>
							<JournalSq2 />
						</View>
					</View>
				</View>

				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitleText}>
						You are on Step {currentStepNumber}, Day {currentDayNumber}
					</Text>
				</View>

				<TouchableOpacity onPress={editJournal} style={styles.journalContainer}>
					<JournalContent title={title} text={text} />
				</TouchableOpacity>

				<View style={styles.journalHistoryContainer}>
					<View style={styles.journalHistoryHeader}>
						<Text style={styles.subtitleText}>
							Recent Entries
						</Text>

						<TouchableOpacity onPress={viewAll}>
							<Text style={[ styles.text, styles.orangeText ]}>
								view all
							</Text>
						</TouchableOpacity>
					</View>

					{
						journalHistory.length
							? (journalHistory.slice(0, 2).map(({ stepNumber, dayNumber }) => (
								<SavedJournal stepNumber={stepNumber} dayNumber={dayNumber} />
							)))
							: <Text style={styles.text}>No journal entries saved yet</Text>
					}
				</View>
			</>
		</StepScreen>
	);
};

const JournalContent = ({ title, text }) => (
	text
		? (
			<View>
				{ title && (
					<View style={styles.subtitleContainer}>
						<Text style={styles.subtitleText}>{title}</Text>
					</View>
				)}
				<Text style={styles.text}>{text}</Text>
			</View>
		)
		: (
			<Text style={styles.howAreYouFeelingText}>
				How are you feeling today?
			</Text>
		)
);
