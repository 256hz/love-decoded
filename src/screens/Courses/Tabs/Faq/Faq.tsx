import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { openWebLink } from '@util/linking';
import { getActiveFaqCategory } from '@redux/selector';
import { FaqCategories } from '@redux/types/appState';
import { StepScreen } from '@elements';
import { setActiveFaqCategory } from '@redux/action';
import styles from './Faq.styles';
import FaqCategory from './FaqCategory';
import FaqAnswer from './FaqAnswer';
import FaqQuestion from './FaqQuestion';

const defaultAnswer = 'Check back soon for an answer to this question!  Thank you for your patience.';

export default () => {
	const dispatch = useDispatch();
	const isFocused = useIsFocused();
	const [ activeQuestion, setActiveQuestion ] = useState('');
	const activeCategory = useSelector(getActiveFaqCategory);
	const setActiveCategory = (category: FaqCategories) => dispatch(setActiveFaqCategory(category));

	const categories = faqs.map(faq => faq.category);
	const categoryFaqs = faqs.find(faq => faq.category === activeCategory)?.faqs;
	const faqAnswer = categoryFaqs?.find(faq => faq.question === activeQuestion)?.answer;
	const activeAnswer = activeQuestion
		? faqAnswer || defaultAnswer
		: '';

	const onBack = () => setActiveQuestion('');

	useEffect(() => {
		if (!isFocused) {
			setActiveQuestion('');
		}
	}, [ isFocused ]);

	return (
		<StepScreen containerStyle={styles.container}>
			<View>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						FAQ
					</Text>
				</View>

				<ScrollView
					contentContainerStyle={styles.categoriesContainer}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={true}
					horizontal={true}
				>
					{
						categories.map(category => (
							<FaqCategory
								key={category}
								name={category}
								active={activeCategory === category}
								onPress={() => setActiveCategory(category)}
							/>
						))
					}
				</ScrollView>

				{
					activeAnswer
						? <FaqAnswer onBack={onBack} text={activeAnswer} />
						: categoryFaqs?.map(faq => (
							<FaqQuestion
								key={faq.question}
								text={faq.question}
								onPress={faq.link
									? () => openWebLink(faq.link)
									: () => setActiveQuestion(faq.question)
								}
							/>
						))
				}
			</View>
		</StepScreen>
	);
};

type Faq = {
	question: string;
	answer: string;
	link?: undefined;
} | {
	question: string;
	link: string;
	answer?: undefined;
};

const faqs = [
	{
		category: FaqCategories.App,
		faqs: [
			{
				question: 'Privacy of my account?',
				answer: '',
			},
			{
				question: 'How to contact tech support if I have an issue with the App?',
				answer: '',
			},
			{
				question: 'Having trouble logging in ? (like gmail / yahoo - if applicable)',
				answer: '',
			},
			{
				question: 'How to cancel or unsubscribe?',
				answer: '',
			},
		] as Faq[],
	},
	{
		category: FaqCategories.Course,
		faqs: [
			{
				question: 'What should I do if I feel like discontinuing the course?',
				answer: '',
			},
			{
				question: 'How to stay motivated during the course?',
				answer: '',
			},
			{
				question: "What should I do if I'm not able to finish or follow through any activity within a day/week?",
				answer: '',
			},
			{
				question: 'Is it ok to skip any step/activity?',
				answer: '',
			},
			{
				question: 'How to contact if I have any questions on the course?',
				answer: '',
			},
		] as Faq[],
	},
	{
		category: FaqCategories.Love,
		faqs: [
			{
				question: 'What is love?',
				answer: "Baby don't hurt me",
			},
			{
				question: 'What is loving unconditionally?',
				answer: '',
			},
			{
				question: 'Why is loving unconditionally important?',
				answer: '',
			},
			{
				question: 'How can we learn to love unconditionally?',
				answer: '',
			},
			{
				question: 'Why is it easier to love others than to love ourselves?',
				answer: '',
			},
			{
				question: 'Exploring how to become aware of our lovable qualities?',
				answer: '',
			},
			{
				question: 'What is the difference between love and attraction?',
				answer: '',
			},
			{
				question: 'What is needed to enhance a relationship?',
				answer: '',
			},
			{
				question: 'How to help an insecure friend?',
				answer: '',
			},
			{
				question: 'What to do when somebody is not affectionate?',
				answer: '',
			},
			{
				question: 'What do you do if you become your own worst enemy?',
				answer: '',
			},
			{
				question: "Who to contact if I've any more questions?",
				answer: '',
			},
		] as Faq[],
	},
	{
		category: FaqCategories.Community,
		faqs: [
			{
				question: "What is the purpose of Love Decoded's community?",
				answer: '',
			},
			{
				question: 'What are the guidelines to follow to be part of the community?',
				answer: '',
			},
		] as Faq[],
	},
	{
		category: FaqCategories.Privacy,
		faqs: [
			{
				question: "Where can I find the app's Privacy Policy or Terms and Conditions?",
				link: 'https://www.love-decoded.com/terms-of-service',
			},
		],
	},
];
