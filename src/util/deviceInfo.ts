import RNDeviceInfo from 'react-native-device-info';
import { sha256 } from 'react-native-sha256';

export const getUniqueDeviceId = async () => {
	const unsafeDeviceId = RNDeviceInfo.getUniqueId();
	return sha256(unsafeDeviceId);
};
