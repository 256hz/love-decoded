import React from 'react';
import { View, Text } from 'react-native';
import { StepScreen } from '@elements';
import { stepGoodJobScreen } from 'route/enums';
import { useSelector } from 'react-redux';
import { getUserProgress } from 'redux/selector';
import styles from './ActivitiesShare.styles';
import ShareWidget from './ShareWidget';

type Props = {
	prompts?: string[];
	linesToShare: string[];
	audioFilename?: string;
};

export default ({ audioFilename, linesToShare, prompts }: Props) => {
	const { currentCourse, currentStep } = useSelector(getUserProgress);

	return (
		<StepScreen
			audioFilename={audioFilename}
			nextTarget={stepGoodJobScreen[currentCourse][currentStep]}
		>
			<View style={styles.container}>
				<View style={styles.bodyContainer}>
					{ prompts?.map(prompt => (
						<View style={styles.textItemContainer} key={prompt}>
							<Prompt prompt={prompt} />
						</View>
					))}


					<View style={styles.textItemContainer}>
						<Text style={[ styles.bodyText, styles.boldText ]}>
							Invite feedback from friends and family every day.  Share your list now!
						</Text>
					</View>

					<ShareWidget linesToShare={linesToShare} />

					<View>
						<Text style={[ styles.bodyText, styles.boldText, { marginTop: 16 } ]}>
							Spend at least 1 week on this exercise.
						</Text>
					</View>
				</View>
			</View>
		</StepScreen>
	);
};

const Prompt = ({ prompt }: { prompt: string }) => (
	<Text style={styles.bodyText}>
		{prompt}
	</Text>
);
