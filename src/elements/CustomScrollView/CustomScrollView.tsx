import React, {
	Dispatch,
	ReactChild,
	SetStateAction,
	useRef,
} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './CustomScrollView.styles';

type Props = {
	children: ReactChild,
	setScrollIndicatorVisible: Dispatch<SetStateAction<boolean>>;
};

export default ({ children, setScrollIndicatorVisible }: Props) => {
	const scrollViewRef = useRef<ScrollView>(null);

	const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => (
		layoutMeasurement.height + contentOffset.y >= contentSize.height - 15
	);

	const setIndicatorVisibleIfMoreToScroll = ({ nativeEvent }) => {
		setScrollIndicatorVisible(!isCloseToBottom(nativeEvent));
	};

	const triggerOnScroll = () => {
		scrollViewRef.current?.scrollTo({ y: 1 });
		scrollViewRef.current?.scrollTo({ y: 0 });
	};

	return (
		<ScrollView
			ref={scrollViewRef}
			contentContainerStyle={styles.childrenContainer}
			onLayout={triggerOnScroll}
			onScroll={setIndicatorVisibleIfMoreToScroll}
			scrollEventThrottle={400}
		>
			{children}
		</ScrollView>
	);
};

