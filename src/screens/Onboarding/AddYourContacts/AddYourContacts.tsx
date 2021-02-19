import React, { useEffect, useState } from 'react';
import {
	PermissionsAndroid, Text, View, Platform,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Contacts, { Contact } from 'react-native-contacts';
import { Spinner } from 'react-native-material-kit';
import { Screens } from 'route/OnboardingStack';
import AddPlus from '@assets/svg/add-plus.svg';
import { OnboardingScreen } from '@elements';
import colors from '@elements/globalStyles/color';
import { mockContacts } from './mockContacts';
import styles from './AddYourContacts.styles';
import ContactCard from './ContactCard';

const SavedContact = ({
	contact: {
		givenName,
		familyName,
		phoneNumbers,
		emailAddresses,
	},
}: { contact: Contact }) => (
	<View style={styles.selectedContactItemContainer}>
		<Text style={[ styles.text, styles.boldText ]}>
			{`${givenName} ${familyName}`}
		</Text>
		<Text style={styles.text}>
			{phoneNumbers[0]}{`${phoneNumbers.length > 1 ? ' ...' : ''}`}
		</Text>
		<Text style={styles.text}>
			{emailAddresses[0]}{`${emailAddresses.length > 1 ? ' ...' : ''}`}
		</Text>
	</View>
);

type SelectedContacts = {
	[recordId: string]: Contact | undefined;
};

export default () => {
	const [ contacts, setContacts ] = useState([] as Contact[]);
	const [ showContacts, setShowContacts ] = useState(false);
	const [ selectedContacts, setSelectedContacts ] = useState({} as SelectedContacts);
	const selectedContactsArray = Object.values(selectedContacts);
	const toggleContacts = () => setShowContacts(x => !x);

	const onPressAdd = () => {
		setContacts([]);
		toggleContacts();
		setTimeout(() => {
			setContacts(mockContacts);
		}, 2500);
	};

	const toggleSelected = (contact: Contact) => {
		if (selectedContacts[contact.recordID]) {
			setSelectedContacts({
				...selectedContacts,
				[contact.recordID]: undefined,
			});
		} else {
			setSelectedContacts({
				...selectedContacts,
				[contact.recordID]: contact,
			});
		}
	};

	// add contact setting to redux

	useEffect(() => {
		// if (Platform.OS === 'android') {
		// 	PermissionsAndroid.request(
		// 		PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
		// 		{
		// 			'title': 'Show Contacts',
		// 			'message': 'Hit Accept to select trusted contacts.',
		// 			'buttonPositive': 'Accept',
		// 		},
		// 	)
		// 		.then(Contacts.getAll)
		// 		.then(setContacts);
		// 	return;
		// }

		// // iOS
		// Contacts.getAllWithoutPhotos()
		// 	.then(setContacts);
	}, []);

	return (
		<>
			<OnboardingScreen
				nextTarget={Screens.YouAreReady}
				drawShapes={[ 5, 7, 11 ]}
				title={'Having The Loving\nCommunity You Deserve'}
			>
				<View style={styles.container}>

					<View style={styles.subtitleContainer}>
						<Text style={styles.text}>
							Who are the family and friends{'\n'}
							in your life you wish were getting{'\n'}
							more love in their lives?
						</Text>
					</View>

					<View style={styles.selectedContactsContainer}>
						{ selectedContactsArray.map(contact => (
							contact
								? <SavedContact contact={contact} key={contact.recordID} />
								: null
						))}
					</View>

					<View style={styles.addMoreContainer}>
						<TouchableOpacity onPress={onPressAdd}>
							<View style={styles.addMoreContainer}>
								<Text style={styles.text}>
									Add Contacts
								</Text>
								<View style={styles.plusContainer}>
									<AddPlus />
								</View>
							</View>
						</TouchableOpacity>
					</View>

				</View>
			</OnboardingScreen>

			{ showContacts && (
				<View style={styles.modalBackground}>
					<ScrollView contentContainerStyle={styles.scrollContainer} style={styles.cardContainer}>
						{ contacts.length
							? contacts.map(contact => (
								<ContactCard
									key={contact.recordID}
									contact={contact}
									selected={!!selectedContacts[contact.recordID]}
									toggleSelected={() => toggleSelected(contact)}
								/>
							))
							: <Spinner style={{ height: 28, width: 28 }} strokeColor={colors.RedTransparent} />
						}
					</ScrollView>
				</View>
			)}
		</>
	);
};
