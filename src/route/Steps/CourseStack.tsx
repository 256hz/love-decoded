import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StepStacks } from 'route/enums';
import { useSelector } from 'react-redux';
import { getUserProgress } from 'redux/selector';
import { getStepStackFromUserProgress } from '@util/navigation';
import Course1Step1Stack from './Course1Step1Stack';
import Course1Step2Stack from './Course1Step2Stack';
import Course1Step3Stack from './Course1Step3Stack';
import Course1Step4Stack from './Course1Step4Stack';

const CourseStack = createStackNavigator();

export default () => {
	const { currentCourse, currentStep } = useSelector(getUserProgress);
	const initialRouteName = getStepStackFromUserProgress(currentCourse, currentStep);

	return (
		<CourseStack.Navigator
			mode="card"
			headerMode="none"
			initialRouteName={StepStacks.Course1Step3}
		>
			<CourseStack.Screen name={StepStacks.Course1Step1} component={Course1Step1Stack} />

			<CourseStack.Screen name={StepStacks.Course1Step2} component={Course1Step2Stack} />

			<CourseStack.Screen name={StepStacks.Course1Step3} component={Course1Step3Stack} />

			<CourseStack.Screen name={StepStacks.Course1Step4} component={Course1Step4Stack} />
		</CourseStack.Navigator>
	);
};
