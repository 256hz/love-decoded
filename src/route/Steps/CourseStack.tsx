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
import Course1Step5Stack from './Course1Step5Stack';
import Course1Step6Stack from './Course1Step6Stack';
import Course1Step7Stack from './Course1Step7Stack';
import Course2Step8Stack from './Course2Step8Stack';
import Course2Step9Stack from './Course2Step9Stack';
import Course2Step10Stack from './Course2Step10Stack';

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
			<CourseStack.Screen
				name={StepStacks.Course1Step1}
				component={Course1Step1Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course1Step2}
				component={Course1Step2Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course1Step3}
				component={Course1Step3Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course1Step4}
				component={Course1Step4Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course1Step5}
				component={Course1Step5Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course1Step6}
				component={Course1Step6Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course1Step7}
				component={Course1Step7Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course2Step8}
				component={Course2Step8Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course2Step9}
				component={Course2Step9Stack}
			/>

			<CourseStack.Screen
				name={StepStacks.Course2Step10}
				component={Course2Step10Stack}
			/>
		</CourseStack.Navigator>
	);
};
