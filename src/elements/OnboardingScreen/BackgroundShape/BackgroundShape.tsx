import React from 'react';
import { View } from 'react-native';

import Svg0 from '@assets/svg/shape-0.svg';
import Svg1 from '@assets/svg/shape-1.svg';
import Svg2 from '@assets/svg/shape-2.svg';
import Svg3 from '@assets/svg/shape-3.svg';
import Svg4 from '@assets/svg/shape-4.svg';
import Svg5 from '@assets/svg/shape-5.svg';
import Svg6 from '@assets/svg/shape-6.svg';
import Svg7 from '@assets/svg/shape-7.svg';
import Svg8 from '@assets/svg/shape-8.svg';
import Svg9 from '@assets/svg/shape-9.svg';
import Svg10 from '@assets/svg/shape-10.svg';
import Svg11 from '@assets/svg/shape-11.svg';
import Svg12 from '@assets/svg/shape-12.svg';
import Svg13 from '@assets/svg/shape-13.svg';
import Svg14 from '@assets/svg/shape-14.svg';
import Svg15 from '@assets/svg/shape-15.svg';
import Svg16 from '@assets/svg/shape-16.svg';
import Svg17 from '@assets/svg/shape-17.svg';
import Svg18 from '@assets/svg/shape-18.svg';
import Svg19 from '@assets/svg/shape-19.svg';
import Svg20 from '@assets/svg/shape-20.svg';
import Svg21 from '@assets/svg/shape-21.svg';
import Svg22 from '@assets/svg/shape-22.svg';
import Svg23 from '@assets/svg/shape-23.svg';
import Svg24 from '@assets/svg/shape-24.svg';
import Svg25 from '@assets/svg/shape-25.svg';
import Svg26 from '@assets/svg/shape-26.svg';
import Svg27 from '@assets/svg/shape-27.svg';

import styles from './BackgroundShape.styles';

// When adding a new shape: import Svg# above, add it to the svgs array below...

const svgs = [
	<Svg0 />,
	<Svg1 />,
	<Svg2 />,
	<Svg3 />,
	<Svg4 />,
	<Svg5 />,
	<Svg6 />,
	<Svg7 />,
	<Svg8 />,
	<Svg9 />,
	<Svg10 />,
	<Svg11 />,
	<Svg12 />,
	<Svg13 />,
	<Svg14 />,
	<Svg15 />,
	<Svg16 />,
	<Svg17 />,
	<Svg18 />,
	<Svg19 />,
	<Svg20 />,
	<Svg21 />,
	<Svg22 />,
	<Svg23 />,
	<Svg24 />,
	<Svg25 />,
	<Svg26 />,
	<Svg27 />,
];

const Shape = ({ shapeToDraw }: { shapeToDraw: number }) => {
	// and add a style called shape# in styles
	const styleName = `shape${shapeToDraw}`;

	return (
		<View style={styles[styleName]}>
			{svgs[shapeToDraw]}
		</View>
	);
};

export default ({ drawShapes }: { drawShapes: number[] }) => (
	<View style={styles.container}>
		{ drawShapes.map(shape => (
			<Shape shapeToDraw={shape} key={shape}/>
		))}
	</View>
);

