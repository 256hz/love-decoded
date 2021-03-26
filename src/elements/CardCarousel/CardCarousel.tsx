import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Card, { CardEntry } from './Card/Card';
import styles from './CardCarousel.styles';

type Props = {
	cards: CardEntry[];
	setNextEnabled: (arg: boolean) => void;
};

type State = {
	entries: CardEntry[];
	activeSlide: number;
	width: number;
};

export default class CardCarousel extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			entries: props.cards,
			activeSlide: 0,
			width: Dimensions.get('screen').width,
		};
	}

	get pagination() {
		const { entries, activeSlide } = this.state;
		return (
			<Pagination
				dotsLength={entries.length}
				activeDotIndex={activeSlide}
				dotStyle={styles.dot}
				dotContainerStyle={styles.dotContainer}
				inactiveDotStyle={styles.inactiveDot}
				inactiveDotOpacity={1}
				inactiveDotScale={0.8}
			/>
		);
	}

	snapToItem = (activeSlide: number) => {
		this.setState({ activeSlide });

		const { entries } = this.state;

		if (activeSlide === entries.length - 1) {
			const { setNextEnabled } = this.props;
			setNextEnabled(true);
		}
	};

	// eslint-disable-next-line class-methods-use-this
	_renderItem({ item }: { item: CardEntry }) {
		return <Card item={item} />;
	}

	render() {
		const { entries, width } = this.state;

		return (
			<View style={styles.container}>
				<Carousel
					data={entries}
					renderItem={this._renderItem}
					onSnapToItem={this.snapToItem}
					sliderWidth={width}
					itemWidth={width * 0.8}
					useScrollView
					inactiveSlideOpacity={0.9}
				/>
				<View style={styles.paginationContainer}>
					{ this.pagination }
				</View>
			</View>
		);
	}
}
