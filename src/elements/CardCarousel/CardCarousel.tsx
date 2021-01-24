import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Card, { CardEntry } from './Card/Card';
import styles from './CardCarousel.styles';

type Props = {
	cards: CardEntry[];
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
					onSnapToItem={(index: number) => this.setState({ activeSlide: index }) }
					sliderWidth={width}
					itemWidth={width * 0.8}
					useScrollView={true}
					inactiveSlideOpacity={0.9}
				/>
				{ this.pagination }
			</View>
		);
	}
}
