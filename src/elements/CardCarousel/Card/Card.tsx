import React, { ReactChild } from 'react';
import {
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './Card.styles';

export type CardEntry = {
	body: string;
	title?: string;
	bottomElement?: ReactChild;
	link?: string;
	bodyStyle?: StyleProp<TextStyle>;
};

export default ({ card }: { card: CardEntry }) => (
	<View style={styles.container}>
		<Text style={[ styles.body, styles.title, styles.highlight ]}>{card.title}</Text>
		<Text style={[ styles.body, card.bodyStyle ]}>{card.body}</Text>
		<View style={styles.cardBottom}>
			{ card.bottomElement || (
				<TouchableOpacity onPress={() => { console.log(card.link); }}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>click to view</Text>
					</View>
				</TouchableOpacity>
			)}
		</View>
	</View>
);
