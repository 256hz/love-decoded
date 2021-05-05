import {
	Activities,
	DayValues,
	Surveys,
	EndOfDaySurveys,
} from 'redux/types/survey';

/*
	------------------------------------------
	COURSE 1
	------------------------------------------
*/

// Step 1
// daily
const course1Step1DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 1,
		[EndOfDaySurveys.Course1Step1Survey1]: '',
		[EndOfDaySurveys.Course1Step1Survey3]: '',
		[EndOfDaySurveys.Course1Step1Survey2]: '',
		[EndOfDaySurveys.Course1Step1Survey4]: '',
		[EndOfDaySurveys.Course1Step1Survey5]: '',
	};
	return acc;
}, {});
// per step
export const course1Step1State = {
	...course1Step1DayState,
	[Activities.Course1Step1Activity1]: '',
	[Activities.Course1Step1Activity2a]: '',
	[Activities.Course1Step1Activity2b]: '',
};

// Step 2
// daily
const course1Step2DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 1,
		[EndOfDaySurveys.Course1Step2Survey1]: '',
		[EndOfDaySurveys.Course1Step2Survey3]: '',
		[EndOfDaySurveys.Course1Step2Survey2]: '',
		[EndOfDaySurveys.Course1Step2Survey4]: '',
	};
	return acc;
}, {});
// per step
export const course1Step2State = {
	...course1Step2DayState,
	[Activities.Course1Step2Activity2a]: '',
	[Activities.Course1Step2Activity2b]: '',
	[Activities.Course1Step2Activity2c]: '',
	[Activities.Course1Step2Activity3a]: '',
	[Activities.Course1Step2Activity3b]: '',
	[Activities.Course1Step2Activity3b]: '',
	[Activities.Course1Step2Activity4]: '',
};

// Step 3
// daily
const course1Step3DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 1,
		[EndOfDaySurveys.Course1Step3Survey1]: '',
		[EndOfDaySurveys.Course1Step3Survey3]: '',
		[EndOfDaySurveys.Course1Step3Survey2]: '',
	};
	return acc;
}, {});
// per step
export const course1Step3State = {
	...course1Step3DayState,
	[Activities.Course1Step3Activity1]: '',
	[Activities.Course1Step3Activity2]: '',
};

// Step 4
// daily
const course1Step4DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 1,
		[EndOfDaySurveys.Course1Step4Survey1]: '',
		[EndOfDaySurveys.Course1Step4Survey2]: '',
		[EndOfDaySurveys.Course1Step4Survey3]: '',
		[EndOfDaySurveys.Course1Step4Survey4]: '',
	};
	return acc;
}, {});
// per step
export const course1Step4State = {
	...course1Step4DayState,
	[Activities.Course1Step4Activity1]: '',
	[Activities.Course1Step4Activity2a]: '',
	[Activities.Course1Step4Activity2b]: '',
	[Activities.Course1Step4Activity3a]: '',
	[Activities.Course1Step4Activity3b]: '',
	[Activities.Course1Step4Resources3]: '',
};
