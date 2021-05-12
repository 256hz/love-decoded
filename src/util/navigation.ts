import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { StepStacks } from 'route/enums';
import {
	Course1Step1Screens,
	Course1Step2Screens,
	Course1Step3Screens,
	Course1Step4Screens,
	Course1Step5Screens,
	Course1Step6Screens,
	Course1Step7Screens,
} from 'route/Steps/Course1Screens';
import { Courses, Steps } from '@redux/types/survey';
import { CourseNumber, StepNumber } from '@redux/types/user';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (routeName, params) => {
	navigationRef.current?.navigate(routeName, params);
};

export const resetRoot = (routeName) => {
	console.log(routeName);
	navigationRef.current?.resetRoot({
		index: 0,
		routes: [ { name: routeName } ],
	});
};

export const getStepStackFromUserProgress = (currentCourse: Courses, currentStep: Steps) => {
	switch (currentCourse) {
		case Courses.One:
			switch (currentStep) {
				case Steps.One: return StepStacks.Course1Step1;
				case Steps.Two: return StepStacks.Course1Step2;
				case Steps.Three: return StepStacks.Course1Step3;
				case Steps.Four: return StepStacks.Course1Step4;
				case Steps.Five: return StepStacks.Course1Step5;
				case Steps.Six: return StepStacks.Course1Step6;
				case Steps.Seven: return StepStacks.Course1Step7;
			}
		case Courses.Two:
			switch (currentStep) {
				case Steps.One: return StepStacks.Course2Step1;
				case Steps.Two: return StepStacks.Course2Step2;
				case Steps.Three: return StepStacks.Course2Step3;
				case Steps.Four: return StepStacks.Course2Step4;
				case Steps.Five: return StepStacks.Course2Step5;
				case Steps.Six: return StepStacks.Course2Step6;
				case Steps.Seven: return StepStacks.Course2Step7;
			}
		case Courses.Three:
			switch (currentStep) {
				case Steps.One: return StepStacks.Course3Step1;
				case Steps.Two: return StepStacks.Course3Step2;
				case Steps.Three: return StepStacks.Course3Step3;
				case Steps.Four: return StepStacks.Course3Step4;
				case Steps.Five: return StepStacks.Course3Step5;
				case Steps.Six: return StepStacks.Course3Step6;
				case Steps.Seven: return StepStacks.Course3Step7;
			}
	}
};

export const getNavigationStack = (currentCourseNumber: CourseNumber, currentStepNumber: StepNumber) => {
	switch (currentCourseNumber) {
		case 1: {
			switch (currentStepNumber) {
				case 1: return Course1Step1Screens;
				case 2: return Course1Step2Screens;
				case 3: return Course1Step3Screens;
				case 4: return Course1Step4Screens;
				case 5: return Course1Step5Screens;
				case 6: return Course1Step6Screens;
				case 7: return Course1Step7Screens;
				default: throw new Error(`no stack found for ${{ currentCourseNumber, currentStepNumber }}`);
			}
		}
		default: return Course1Step1Screens;
	}
};
