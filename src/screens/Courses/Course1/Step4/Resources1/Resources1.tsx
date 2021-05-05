import React from 'react';
import { Text, View } from 'react-native';
import { Course1Step4Screens } from 'route/Steps/Course1Screens';
import ResourcesScreen from '@screens/Courses/Common/ResourcesScreen';
import styles from './Resources1.styles';

const statements = [
	'1. I would like to become aware of my own and others’ unloving, conditional behaviors as well as loving, unconditional behaviors.',
	'2. I would like to learn to love unconditionally.',
	'3. I want to know how to accept others’ loving energy even when I am angry.',
	'4. I want to learn how to develop boundaries, not allowing others to behave unlovingly, and do it lovingly.',
	'5. I want to develop the ability to resist the temptation to blame others or assume their actions are on purpose hurtful.',
	'6. I want to learn to accept the idea that all people, including me, are always doing the best they can.',
	'7. I want to develop the ability of giving unconditional love.',
];

export default ({ navigation }) => {
	return (
		<ResourcesScreen
			hideBackButton
			nextTarget={Course1Step4Screens.Resources2}
			navigation={navigation}
		>
			<View style={styles.container}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitleText}>
						Which of the following statements describe you?
					</Text>
				</View>

				{ statements.map(item => (
					<View style={styles.listTextItem} key={item}>
						<Text style={styles.itemText}>
							{item}
						</Text>
					</View>
				))}

				<View style={styles.subtitleContainer}>
					<Text style={styles.bottomText}>
						Is there any other statement you would like to incorporate into your vision?
					</Text>
				</View>
			</View>
		</ResourcesScreen>
	);
};
