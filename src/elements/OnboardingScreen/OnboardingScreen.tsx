import React, { ReactChild } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	Text,
	View,
	ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStacks } from 'route/enums';
import Logo from '@assets/svg/logo.svg';
import { DEMO_MODE } from '@util/demoMode';
import { AudioPlayerNavigator } from '@elements/AudioPlayerNavigator';
import { AudioPlayerNavigatorProps } from '@elements/AudioPlayerNavigator/AudioPlayerNavigator';
import { CustomScrollView } from 'elements/CustomScrollView';
import colors from '@elements/globalStyles/color';
import { BackgroundFade } from './BackgroundFade';
import styles from './OnboardingScreen.styles';

type Props = {
	children: ReactChild;
	customBottomSection?: ReactChild,
	drawShapes?: number[];
	hideBackButton?: boolean;
	hideBackgroundImage?: boolean;
	hideNextButton?: boolean;
	scrollDisabled?: boolean;
	showLogo?: boolean;
	title?: string;
	titleChild?: ReactChild,
	titleContainerStyle?: ViewStyle;
} & AudioPlayerNavigatorProps;

export default ({
	audioFilename,
	backTarget,
	children = <></>,
	customBottomSection = <></>,
	customButtons,
	drawShapes,
	hideBackButton,
	hideBackgroundImage,
	hideNextButton,
	onAudioEnd,
	onPressNext,
	nextEnabled,
	nextTarget,
	scrollDisabled = false,
	showLogo,
	title,
	titleChild = <></>,
	titleContainerStyle,
}: Props) => {
	const { navigate } = useNavigation();

	const onPressLogo = () => {
		DEMO_MODE && navigate(RootStacks.HomeTabs);
	};

	return (
		<View style={styles.container}>
			{/* Background image/shapes */}
			<BackgroundFade drawShapes={drawShapes} hideBackgroundImage={hideBackgroundImage}>
				<SafeAreaView style={styles.screenContainer}>
					<OptionalKeyboardAvoidingView
						useAvoiding={Platform.OS === 'ios'}
						style={styles.container}
					>
						<>
							{ showLogo
								? (
									<View style={styles.logoContainer}>
										<Pressable onLongPress={onPressLogo}>
											<Logo />
										</Pressable>
									</View>
								)
								: null
							}

							{/* Title */}
							<View style={[
								styles.titleContainer,
								showLogo && styles.titleLogoMargin,
								titleContainerStyle,
							]}>
								<Text style={styles.titleText}>
									{title}
								</Text>

								{ titleChild }
							</View>

							{/* screen contents */}

							<CustomScrollView
								indicatorArrowColor={colors.Gray92}
								scrollDisabled={scrollDisabled}
							>
								{children}
							</CustomScrollView>
						</>
					</OptionalKeyboardAvoidingView>

					{ customBottomSection }

					{ nextTarget
						? (
							<AudioPlayerNavigator
								audioFilename={audioFilename}
								backTarget={backTarget}
								hideBackButton={hideBackButton}
								hideNextButton={hideNextButton}
								onAudioEnd={onAudioEnd}
								onPressNext={onPressNext}
								nextEnabled={nextEnabled}
								nextTarget={nextTarget}
							/>
						)
						: null
					}

					{ audioFilename && customButtons
						? (
							<AudioPlayerNavigator
								audioFilename={audioFilename}
								customButtons={customButtons}
								onAudioEnd={onAudioEnd}
							/>
						)
						: null
					}
				</SafeAreaView>
			</BackgroundFade>

		</View>
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
				style={style}
			>
				{children}
			</KeyboardAvoidingView>
		)
		: <View style={style}>{children}</View>;
