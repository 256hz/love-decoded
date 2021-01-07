import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, View } from 'react-native';

import { getUserId } from '@redux/selector';
import { setUserProperty, logIn } from '@redux/action/user';
import { UserProperty } from '@redux/types/user';
import { allState } from '@redux/selector/user';
import { OnboardingScreen } from '@elements';

interface Props {
	drawShapes?: number[];
}

export default ({ drawShapes }: Props) => {
	const dispatch = useDispatch();
	const aState = useSelector(allState);
	const userId = useSelector(getUserId);

	const onPress = () => {
		console.log(aState);
		dispatch(setUserProperty(UserProperty.ID, userId as number + 1));
		dispatch(logIn('user', 'password'));
	};

	return (
		<OnboardingScreen drawShapes={drawShapes}>
			<Button title="Test Store/Sagas" onPress={onPress} />
		</OnboardingScreen>
	);
};
