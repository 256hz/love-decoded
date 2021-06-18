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
import { Course2Step8Screens, Course2Step9Screens } from 'route/Steps/Course2Screens';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (routeName, params) => {
	navigationRef.current?.navigate(routeName, params);
};

export const resetRoot = (routeName) => {
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
				case Steps.Eight: return StepStacks.Course2Step8;
				case Steps.Nine: return StepStacks.Course2Step9;
				case Steps.Ten: return StepStacks.Course2Step10;
				case Steps.Eleven: return StepStacks.Course2Step11;
				case Steps.Twelve: return StepStacks.Course2Step12;
				case Steps.Thirteen: return StepStacks.Course2Step13;
				case Steps.Fourteen: return StepStacks.Course2Step14;
			}
		case Courses.Three:
			switch (currentStep) {
				case Steps.Fifteen: return StepStacks.Course3Step15;
				case Steps.Sixteen: return StepStacks.Course3Step16;
				case Steps.Seventeen: return StepStacks.Course3Step17;
				case Steps.Eighteen: return StepStacks.Course3Step18;
				case Steps.Nineteen: return StepStacks.Course3Step19;
				case Steps.Twenty: return StepStacks.Course3Step20;
				case Steps.Twentyone: return StepStacks.Course3Step21;
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
		case 2: {
			switch (currentStepNumber) {
				case 8: return Course2Step8Screens;
				case 9: return Course2Step9Screens;
				default: throw new Error(`no stack found for ${{ currentCourseNumber, currentStepNumber }}`);
			}
		}
		default: return Course1Step1Screens;
	}
};
