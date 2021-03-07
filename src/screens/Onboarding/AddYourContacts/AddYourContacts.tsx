import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	PermissionsAndroid, Platform, Text, View,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Contacts, { Contact } from 'react-native-contacts';
import { Spinner } from 'react-native-material-kit';
import { OnboardingScreens } from 'route/enums';
import AddPlus from '@assets/svg/add-plus.svg';
import { OnboardingScreen } from '@elements';
import colors from '@elements/globalStyles/color';
import {
	getContacts,
	getContactsArray,
} from '@redux/selector';
import { setContact } from '@redux/action';
import { mockContacts } from './mockContacts';
import styles from './AddYourContacts.styles';
import ContactCard from './ContactCard';

const SavedContact = ({ contact, toggleSelected }: { contact: Contact, toggleSelected: () => void}) => (
	<View style={styles.selectedContactItemContainer}>
		<ContactCard
			contact={contact}
			longPress={true}
			selected={false}
			toggleSelected={toggleSelected}
		/>
	</View>
);

const Divider = () => (
	<View style={styles.dividerContainer}>
		<View style={styles.divider} />
	</View>
);

export default () => {
	const dispatch = useDispatch();
	const [ contacts, setContacts ] = useState([] as Contact[]);
	const [ showContacts, setShowContacts ] = useState(false);
	const savedContacts = useSelector(getContacts);
	const savedContactsArray = useSelector(getContactsArray);

	const toggleContacts = () => setShowContacts(show => !show);

	const sortContacts = (a: Contact, b: Contact) => a.givenName < b.givenName ? -1 : 1;

	const toggleSelected = (contact: Contact) => dispatch(setContact(contact));

	const onPressAdd = () => {
		setContacts([]);
		toggleContacts();
		setTimeout(() => {
			setContacts(mockContacts.sort(sortContacts));
		}, 750);
	};

	/*
	useEffect(() => {
		if (Platform.OS === 'android') {
			PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
				{
					'title': 'Show Contacts',
					'message': 'Hit Accept to select trusted contacts.',
					'buttonPositive': 'Accept',
				},
			)
				.then(Contacts.getAll)
				.then(setContacts);
			return;
		}

		// iOS
		Contacts.getAllWithoutPhotos()
			.then(setContacts);
	}, []);
	*/

	return (
		<>
			<OnboardingScreen
				nextTarget={OnboardingScreens.YouAreReady}
				drawShapes={[ 5, 7, 11 ]}
				title={'Having The Loving\nCommunity You Deserve'}
				titleChild={
					<View style={styles.subtitleContainer}>
						<Text style={styles.text}>
							Who are the family and friends{'\n'}
							in your life you wish were getting{'\n'}
							more love in their lives?
						</Text>
					</View>
				}
			>
				<View style={styles.container}>

					<View style={styles.selectedContactsContainer}>
						{ savedContactsArray.map((contact, i) => (
							contact
								? (
									<Fragment key={contact.recordID}>
										<SavedContact
											contact={contact}
											toggleSelected={() => toggleSelected(contact)}
										/>

										<Divider />
									</Fragment>
								)
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
					<View style={styles.cardsContainer}>
						<TouchableOpacity onPress={toggleContacts}>
							<View style={styles.contactsBackContainer}>
								<Text style={styles.backText}>{'< Back'}</Text>
							</View>
						</TouchableOpacity>
						<ScrollView contentContainerStyle={styles.scrollContainer}>
							{ contacts.length
								? contacts.map((contact, i) => (
									<View style={styles.cardContainer} key={contact.recordID}>
										<ContactCard
											key={contact.recordID}
											contact={contact}
											selected={!!savedContacts[contact.recordID]}
											toggleSelected={() => toggleSelected(contact)}
										/>

										{ i < contacts.length - 1 ? <Divider /> : null }
									</View>
								))
								: (<View style={styles.loadingContainer}>
									<Spinner style={styles.spinner} strokeColor={colors.RedTransparent} />
								</View>
								)}
						</ScrollView>
					</View>
				</View>
			)}
		</>
	);
};
