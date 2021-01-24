import React, { ReactChild, ReactElement } from 'react';
import {
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './Card.styles';

export type CardEntry = {
	body?: string;
	BodyElement?: () => ReactElement;
	title?: string;
	bottomElement?: ReactChild;
	link?: string;
	bodyStyle?: StyleProp<TextStyle>;
};

export default ({ item }: { item: CardEntry }) => (
	<View style={styles.container}>
		{
			item.title && <Text style={[ styles.body, styles.title, styles.highlight ]}>{item.title}</Text>
		}

		{
			item.BodyElement
				? <item.BodyElement />
				: <Text style={[ styles.body, item.bodyStyle ]}>{item.body}</Text>
		}

		<View style={styles.cardBottom}>
			{ item.bottomElement || (
				<TouchableOpacity onPress={() => { console.log(item.link); }}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>click to view</Text>
					</View>
				</TouchableOpacity>
			)}
		</View>
	</View>
);
