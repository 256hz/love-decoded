import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { Courses, Steps } from 'redux/types/survey';
import { StepStacks } from 'route/enums';

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

export const getStepStackFromUserProgress = (currentCourse, currentStep) => {
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
