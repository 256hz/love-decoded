import React, { Fragment, ReactChild } from 'react';
import { View, Text } from 'react-native';
import {
	LongPressGestureHandler,
	State,
	TouchableOpacity,
} from 'react-native-gesture-handler';
import { Contact } from 'react-native-contacts';
import vibrate from 'util/vibrate';
import styles from './ContactCard.styles';

interface Props {
	contact: Partial<Contact>;
	longPress?: boolean;
	selected: boolean;
	toggleSelected: () => void;
}

const SectionHeading = ({ heading }: { heading: string }) => (
	<Text style={styles.headingText} numberOfLines={1}>
		{heading}
	</Text>
);

const TextWithLabel = ({ label, text }: { label?: string; text?: string }) => (
	<>
		{ label
			? (
				<Text style={styles.sectionLabelText} numberOfLines={1}>
					{label}:
				</Text>
			)
			: null
		}

		{ text
			? (
				<Text style={styles.sectionText} numberOfLines={1}>
					{text}
				</Text>
			)
			: null
		}
	</>
);

type TouchWrapperProps = Omit<Props, 'contact' | 'selected'> & { children: ReactChild };

const TouchWrapper = ({ longPress, toggleSelected, children }: TouchWrapperProps) => {
	const toggle = () => {
		vibrate('short');
		toggleSelected();
	};

	return (
		longPress
			? (
				<LongPressGestureHandler
					onHandlerStateChange={
						({ nativeEvent }) => nativeEvent.state === State.END && toggle()
					}
					minDurationMs={700}
				>
					{children}
				</LongPressGestureHandler>
			) : (
				<TouchableOpacity onPress={toggle}>
					{children}
				</TouchableOpacity>
			)
	);
};
export default ({ contact, longPress, selected, toggleSelected }: Props) => {
	const {
		givenName,
		familyName,
		phoneNumbers = [],
		emailAddresses = [],
	} = contact;

	return (
		<TouchWrapper longPress={longPress} toggleSelected={toggleSelected}>
			<View style={[ styles.container, selected && styles.selectedContainer ]}>
				<View style={styles.sectionContainer}>
					<Text style={styles.nameText} numberOfLines={1}>
						{`${givenName} ${familyName}`}
					</Text>
				</View>

				<View style={styles.sectionContainer}>
					<SectionHeading heading="Email" />
					{ emailAddresses.map(({ label, email }) => (
						<TextWithLabel
							label={label}
							text={email}
							key={(label || '') + email}
						/>
					))}
				</View>

				<View style={styles.sectionContainer}>
					<SectionHeading heading="Phone" />
					{ phoneNumbers?.map(({ label, number }) => (
						<Fragment key={label + number}>
							<TextWithLabel
								label={label}
								text={number}
								key={(label || '') + number}
							/>
						</Fragment>
					))}
				</View>
			</View>
		</TouchWrapper>
	);
};
