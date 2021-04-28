import React, {
	ReactChild,
	useRef,
	useState,
} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DownArrow from '@assets/svg/down-arrow.svg';
import colors from '@elements/globalStyles/color';
import styles from './CustomScrollView.styles';

type Props = {
	children: ReactChild,
	indicatorArrowColor?: string;
	indicatorBackgroundColor?: string;
};

const CustomScrollView = ({ children, indicatorArrowColor, indicatorBackgroundColor }: Props) => {
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
		scrollViewRef.current?.scrollTo({ y: 0, animated: false });
	};

	return (
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
	);
};

type ScrollWrapperProps = {
	children: ReactChild,
	indicatorArrowColor?: string;
	indicatorBackgroundColor?: string;
	scrollDisabled: boolean,
};

export default ({
	children,
	indicatorArrowColor,
	indicatorBackgroundColor,
	scrollDisabled,
}: ScrollWrapperProps) => (
	scrollDisabled
		? <View style={styles.childrenContainer}>{children}</View>
		: <CustomScrollView
			indicatorArrowColor={indicatorArrowColor}
			indicatorBackgroundColor={indicatorBackgroundColor}
		>
			{children}
		</CustomScrollView>
);

type ScrollIndicatorProps = {
	arrowColor?: string;
	backgroundColor?: string;
	scrollToBottom: () => void;
};

const ScrollIndicator = ({
	arrowColor = colors.Gray92,
	backgroundColor,
	scrollToBottom,
}: ScrollIndicatorProps) => (
	<View style={styles.scrollIndicatorContainer}>
		<TouchableOpacity onPress={scrollToBottom}>
			<View style={[ styles.scrollIndicator, { backgroundColor } ]}>
				<DownArrow fill={arrowColor} />
			</View>
		</TouchableOpacity>
	</View>
);

