import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { getModalContentByType } from '@redux/selector';
import { Modals } from '@redux/types/modal';
import ModalBackground from './ModalBackground';
import styles from './Modals.styles';

export default () => {
	const contactCardModal = useSelector(getModalContentByType(Modals.CardContacts));

	const isAnyModalVisible = !!contactCardModal;

	return (isAnyModalVisible
		? (
			<View style={styles.container}>
				<ModalBackground />
			</View>
		)
		: null
	);
};
