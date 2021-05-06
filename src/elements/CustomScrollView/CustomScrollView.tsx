import React, {
	ReactChild,
	useRef,
	useState,
} from 'react';
import {
	Platform,
	Pressable,
	View,
	ViewStyle,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DownArrow from '@assets/svg/down-arrow.svg';
import colors from '@elements/globalStyles/color';
import styles from './CustomScrollView.styles';

type ScrollWrapperProps = {
	children: ReactChild,
	indicatorArrowColor?: string;
	indicatorBackgroundColor?: string;
	scrollDisabled?: boolean,
	style?: ViewStyle;
};

export default ({
	children,
	indicatorArrowColor,
	indicatorBackgroundColor,
	scrollDisabled,
	style = {},
}: ScrollWrapperProps) => (
	scrollDisabled
		? <View style={[ styles.childrenContainer, style ]}>
			{children}
		</View>
		: <CustomScrollView
			indicatorArrowColor={indicatorArrowColor}
			indicatorBackgroundColor={indicatorBackgroundColor}
			style={style}
		>
			{children}
		</CustomScrollView>
);

type CustomScrollViewProps = {
	children: ReactChild,
	indicatorArrowColor?: string;
	indicatorBackgroundColor?: string;
	style?: ViewStyle;
};

const CustomScrollView = ({
	children,
	indicatorArrowColor,
	indicatorBackgroundColor,
	style,
}: CustomScrollViewProps) => {
	const [ scrollIndicatorVisible, setScrollIndicatorVisible ] = useState(false);

	const scrollViewRef = useRef<ScrollView>(null);

	const hasNotReachedBottom = ({ layoutMeasurement, contentOffset, contentSize }) => (
		layoutMeasurement.height + contentOffset.y < contentSize.height - 15
	);

	const setIndicatorVisibleIfMoreToScroll = ({ nativeEvent }) => {
		setScrollIndicatorVisible(hasNotReachedBottom(nativeEvent));
	};

	const scrollToBottom = () => {
		scrollViewRef.current?.scrollToEnd({ animated: true });
	};

	const triggerOnScroll = () => {
		scrollViewRef.current?.scrollTo({ y: 1, animated: false });
	};

	return (
		<View style={[ styles.container, style ]}>
			<View style={styles.childrenContainer}>
				<ScrollView
					ref={scrollViewRef}
					contentContainerStyle={styles.childrenContainer}
					onLayout={triggerOnScroll}
					onScroll={setIndicatorVisibleIfMoreToScroll}
					scrollEventThrottle={400}
				>
					{children}
				</ScrollView>

				{ scrollIndicatorVisible
					? <ScrollIndicator
						arrowColor={indicatorArrowColor}
						backgroundColor={indicatorBackgroundColor}
						scrollToBottom={scrollToBottom}
					/>
					: null}
			</View>
		</View>
	);
};

type ScrollIndicatorProps = {
	arrowColor?: string;
	backgroundColor?: string;
	scrollToBottom: () => void;
};

const ScrollIndicator = ({
	arrowColor = colors.Gray92,
	backgroundColor = Platform.select({ ios: colors.WhiteTransparent, android: colors.GrayF3 }),
	scrollToBottom,
}: ScrollIndicatorProps) => (
	<View style={styles.scrollIndicatorContainer}>
		<Pressable onPressIn={scrollToBottom} hitSlop={23}>
			<View style={[ styles.scrollIndicator, { backgroundColor } ]}>
				<DownArrow fill={arrowColor} />
			</View>
		</Pressable>
	</View>
);

