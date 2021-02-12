import React from 'react';
import { View } from 'react-native';
import styles from './ContactCardModal.styles';

export default () => {
	return (
		<View style={styles.container}>
			<View style={styles.modalContainer}>
							<ScrollView contentContainerStyle={styles.cardContainer}>
								{ contacts.length
									? contacts.map(contact => (
										<ContactCard
											key={contact.recordID}
											contact={contact}
											selected={!!selectedContacts[contact.recordID]}
											setSelected={() => setSelectedContacts({ ...selectedContacts, [contact.recordID]: contact } )}
											clearSelected={() => setSelectedContacts({ ...selectedContacts, [contact.recordID]: undefined })}
										/>
									))
									: <Spinner style={{ height: 28, width: 28 }} strokeColor={colors.RedTransparent} />
								}
							</ScrollView>
						</TouchableOpacity>
					</View>
					// </TouchableOpacity>
				)}
			</View>
		</View>
	);
};
