import React, { Fragment } from 'react';
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
import styles from './BackgroundShape.styles';

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
];

const Shape = ({ shapeToDraw }: { shapeToDraw: number }) => (
	<View style={styles[`shape${shapeToDraw}`]}>
		{svgs[shapeToDraw]}
	</View>
);

export default ({ drawShapes }: { drawShapes: number[] }) => (
	<>
		{ drawShapes.map(shape => (
			<Fragment key={shape}>
				<Shape shapeToDraw={shape} />
			</Fragment>
		))}
	</>
);

