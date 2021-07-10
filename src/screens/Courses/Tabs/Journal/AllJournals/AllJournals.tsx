import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';
import { getJournalHistory } from '@redux/selector';
import { StepScreen } from 'elements';
import SavedJournal from '../SavedJournal';
import styles from './AllJournals.styles';

export default () => {
	const journalHistory = useSelector(getJournalHistory);

	return (
		<StepScreen containerStyle={styles.container}>
			<>
				{
					journalHistory.length
						? journalHistory.map(journal => (
							<SavedJournal
								key={`${journal.stepNumber}-${journal.dayNumber}`}
								stepNumber={journal.stepNumber}
								dayNumber={journal.dayNumber}
							/>
						))
						: <Text style={styles.text}>No journal entries saved yet</Text>
				}
			</>
		</StepScreen>
	);
};
