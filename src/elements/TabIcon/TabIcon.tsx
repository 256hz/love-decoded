import React from 'react';
import { Text, View } from 'react-native';
import { TabNames } from 'route/HomeTabs';
import Home from '@assets/svg/home.svg';
import FAQ from '@assets/svg/faq.svg';
import Journal1 from '@assets/svg/journal-1.svg';
import Journal2 from '@assets/svg/journal-2.svg';
import Reset from '@assets/svg/emotional-reset.svg';
import colors from '@elements/globalStyles/color';
import styles from './TabIcon.styles';

const Journal = ({ fill }: { fill: string }) => (
	<View style={styles.journalContainer}>
		<Journal1 fill={fill} />
		<View style={styles.journalSpace}/>
		<Journal2 fill={fill} />
	</View>
);

const TabIcons = (selected: boolean) => {
	const fill = selected ? colors.Orange : colors.GrayButton;

	return {
		[TabNames.HomeScreen]: <Home fill={fill} />,
		[TabNames.JournalScreen]: <Journal fill={fill} />,
		[TabNames.FAQScreen]: <FAQ fill={fill} />,
		[TabNames.ResetScreen]: <Reset fill={fill} />,
	};
};

type Props = {
	tabName: TabNames;
	selected?: boolean;
};

export default ({ tabName, selected = false }: Props) => (
	<View style={styles.container}>
		{
			TabIcons(selected)[tabName]
		}
		<Text style={[ styles.labelText, selected && styles.labelSelected ]}>
			{tabName}
		</Text>
	</View>
);
