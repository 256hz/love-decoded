import { OnboardingScreen } from 'elements';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { averageTwoNeffPageScores } from 'redux/selector';
import { Screens } from 'route/OnboardingStack';
import styles from './NeffSurveyBreakdown.styles';

type NeffScoreLineProps = {
	heading: string;
	score: number;
};

const NeffScoreLine = ({ heading, score }: NeffScoreLineProps) => (
	<View style={styles.scoreLineContainer}>
		<View style={styles.scoreHeadingContainer}>
			<Text style={styles.text}>
				{`${heading}:`}
			</Text>
		</View>

		<View style={styles.scoreNumberContainer}>
			<View style={styles.scoreContainer}>
				<Text style={[ styles.text, styles.bold ]}>
					{score}
				</Text>
			</View>
		</View>
	</View>
);

export default () => {
	const selfKindnessScore = useSelector(averageTwoNeffPageScores(2, 6));
	const commonHumanityScore = useSelector(averageTwoNeffPageScores(5, 10));
	const mindfulnessScore = useSelector(averageTwoNeffPageScores(3, 7));
	const selfJudgementScore = useSelector(averageTwoNeffPageScores(11, 12));
	const isolationScore = useSelector(averageTwoNeffPageScores(4, 8));
	const overIdentifiedScore = useSelector(averageTwoNeffPageScores(1, 9));

	return (
		<OnboardingScreen
			drawShapes={[ 22, 23, 24 ]}
			nextTarget={Screens.NeffSurveyGoodJob}
		>
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.text}>
					Here is a more in-depth breakdown - higher self-compassionate behaviors are directly related to increased positive states of mind like happiness and life-satisfaction.
				</Text>

				<View>
					<NeffScoreLine heading="Self - Kindess" score={selfKindnessScore} />
					<NeffScoreLine heading="Common Humanity" score={commonHumanityScore} />
					<NeffScoreLine heading="Mindfulness" score={mindfulnessScore} />
				</View>

				<Text style={styles.text}>
					Higher uncompassionate behaviors are directly related to negative mind-states like depression, stress, and anxiety.
				</Text>

				<View>
					<NeffScoreLine heading="Self - Judgement" score={selfJudgementScore} />
					<NeffScoreLine heading="Isolation" score={isolationScore} />
					<NeffScoreLine heading="Over-indentification" score={overIdentifiedScore} />
				</View>
			</ScrollView>
		</OnboardingScreen>
	);
};
