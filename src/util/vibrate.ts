import { Platform } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const strengths: { [key: string]: ReactNativeHapticFeedback.HapticFeedbackTypes} = {
	short: 'selection',
	longPress: Platform.select({ ios: 'impactMedium', android: 'longPress', default: 'impactMedium' }),
};

const options = {};

export default (strength: keyof typeof strengths) => {
	ReactNativeHapticFeedback.trigger(strengths[strength], options);
};
