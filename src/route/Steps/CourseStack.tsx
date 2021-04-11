import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StepStacks } from 'route/enums';

import { useSelector } from 'react-redux';
import { getUserProgress } from 'redux/selector';
import { getStepStackFromUserProgress } from 'util/navigation';
import Course1Step1Stack from './Course1Step1Stack';


const CourseStack = createStackNavigator();

export default () => {
	const { currentCourse, currentStep } = useSelector(getUserProgress);
	const initialRouteName = getStepStackFromUserProgress(currentCourse, currentStep);

	return (
		<CourseStack.Navigator
			mode="card"
			headerMode="none"
			initialRouteName={initialRouteName}
		>
			<CourseStack.Screen name={StepStacks.Course1Step1} component={Course1Step1Stack} />
		</CourseStack.Navigator>
	);
};
