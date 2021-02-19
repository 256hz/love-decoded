import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { Contact } from 'react-native-contacts';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './ContactCard.styles';

interface Props {
	contact: Contact;
	selected: boolean;
	toggleSelected: () => void;
}

export default ({ contact, selected, toggleSelected }: Props) => {
	const {
		givenName,
		familyName,
		phoneNumbers,
		emailAddresses,
	} = contact;

	return (
		<TouchableHighlight onPress={toggleSelected}>
			<View style={[ styles.container, selected && styles.selectedContainer ]}>
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
						<Fragment key={label + email}>
							<Text style={styles.sectionLabelText}>
								{label}
							</Text>
							<Text style={styles.sectionText}>
								{email}
							</Text>
						</Fragment>
					))}
				</View>

				<View style={styles.sectionContainer}>
					<Text style={styles.headingText}>
						Phone
					</Text>
					{ phoneNumbers.map(({ label, number }) => (
						<Fragment key={label + number}>
							<Text style={styles.sectionLabelText}>
								{label}
							</Text>
							<Text style={styles.sectionText}>
								{number}
							</Text>
						</Fragment>
					))}
				</View>
			</View>
		</TouchableHighlight>
	);
};
