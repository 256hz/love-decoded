import React, { ReactChild } from 'react';
import {
	KeyboardAvoidingView, Platform, View, ViewStyle,
} from 'react-native';
import { Screens } from 'route/enums';
import { AudioPlayerNavigator } from '@elements/AudioPlayerNavigator';
import { CustomScrollView } from '@elements/CustomScrollView';
import colors from '@elements/globalStyles/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './StepScreen.styles';

type Props = {
	audioFilename?: string;
	backTarget?: Screens;
	children: ReactChild;
	containerStyle?: ViewStyle;
	customMiddleContent?: ReactChild;
	hideBackButton?: boolean;
	hideNextButton?: boolean;
	onAudioEnd?: () => void;
	onPressNext?: () => void;
	nextEnabled?: boolean;
	nextTarget?: Screens;
	scrollDisabled?: boolean;
};

export default ({
	audioFilename,
	children,
	containerStyle = {},
	customMiddleContent,
	scrollDisabled = false,
	backTarget,
	hideBackButton,
	hideNextButton,
	onAudioEnd,
	onPressNext,
	nextEnabled,
	nextTarget,
}: Props) => {
	return (
		<SafeAreaView style={[ styles.container, containerStyle ]}>
			<OptionalKeyboardAvoidingView
				useAvoiding={Platform.OS === 'ios'}
				style={styles.middleContainer}
			>
				<CustomScrollView
					indicatorArrowColor={colors.Gray62}
					scrollDisabled={scrollDisabled}
				>
					{children}
				</CustomScrollView>
			</OptionalKeyboardAvoidingView>

			{ nextTarget
				? (
					<AudioPlayerNavigator
						audioFilename={audioFilename}
						backTarget={backTarget}
						customMiddleContent={customMiddleContent}
						hideBackButton={hideBackButton}
						hideNextButton={hideNextButton}
						onAudioEnd={onAudioEnd}
						onPressNext={onPressNext}
						nextEnabled={nextEnabled}
						nextTarget={nextTarget}
					/>
				) : null
			}
		</SafeAreaView>
	);
};

type OptionalKeyboardAvoidingViewProps = {
	useAvoiding: boolean,
	children: ReactChild,
	style?: ViewStyle
};

const OptionalKeyboardAvoidingView = ({ useAvoiding, children, style }: OptionalKeyboardAvoidingViewProps) =>
	useAvoiding
		? (
			<KeyboardAvoidingView
				behavior={Platform.select({ ios: 'padding' })}
				enabled
				keyboardVerticalOffset={Platform.select({ ios: 100 })}
				style={style}
			>
				{children}
			</KeyboardAvoidingView>
		)
		: <View style={style}>{children}</View>;
