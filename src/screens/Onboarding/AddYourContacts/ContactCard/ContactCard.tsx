import React from 'react';
import { View, Text } from 'react-native';
import { Contact } from 'react-native-contacts';
import styles from './ContactCard.styles';

interface Props {
	contact: Contact;
	selected: boolean;
	setSelected: () => void;
	clearSelected: () => void;
}

export default ({ contact, selected, setSelected, clearSelected }: Props) => {
	const {
		recordID,
		givenName,
		familyName,
		phoneNumbers,
		emailAddresses,
	} = contact;

	return (
		<View style={styles.container}>
			<View style={styles.sectionContainer}>
				<Text style={styles.nameText}>
					{`${givenName} ${familyName}`}
				</Text>
			</View>

			<View style={styles.sectionContainer}>
				<Text style={styles.headingText}>
					Email
				</Text>
				{ emailAddresses.map(({ label, email }) => (
					<>
						<Text style={styles.sectionLabelText}>
							{label}
						</Text>
						<Text style={styles.sectionText}>
							{email}
						</Text>
					</>
				))}
			</View>

			<View style={styles.sectionContainer}>
				<Text style={styles.headingText}>
					Phone
				</Text>
				{ phoneNumbers.map(({ label, number }) => (
					<>
						<Text style={styles.sectionLabelText}>
							{label}
						</Text>
						<Text style={styles.sectionText}>
							{number}
						</Text>
					</>
				))}
			</View>
		</View>
	);
};
