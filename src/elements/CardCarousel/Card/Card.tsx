import React, { ReactChild, ReactElement } from 'react';
import {
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
} from 'react-native';
import { openWebLink } from 'util/linking';
import styles from './Card.styles';

export type CardEntry = {
	body?: string;
	BodyElement?: () => ReactElement;
	bodyStyle?: StyleProp<TextStyle>;
	bottomElement?: ReactChild;
	centerBody?: boolean;
	link?: string;
	title?: string;
};

export default ({ item }: { item: CardEntry }) => {
	const {
		body,
		BodyElement,
		bodyStyle,
		bottomElement,
		centerBody,
		link,
		title,
	} = item;

	return (
		<View style={styles.container}>
			<View style={styles.cardContainer}>
				{ title
					? (
						<Text style={[ styles.body, styles.title, styles.highlight ]}>{title}</Text>
					)
					: null
				}

				{ BodyElement
					? <BodyElement />
					: (
						<View style={centerBody && styles.centerBody}>
							<Text style={[ styles.body, bodyStyle ]}>{body}</Text>
						</View>
					)
				}

				<View style={styles.cardBottom}>
					{ bottomElement }
					{ link
						? (
							<TouchableOpacity onPress={() => openWebLink(link)}>
								<View style={styles.button}>
									<Text style={styles.buttonText}>click to view</Text>
								</View>
							</TouchableOpacity>
						)
						: null
					}
				</View>
			</View>
		</View>
	);
};
