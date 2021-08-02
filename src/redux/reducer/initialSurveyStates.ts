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
// per day
const course1Step1DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
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
// per day
const course1Step2DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
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
// per day
const course1Step3DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
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
// per day
const course1Step4DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
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

// Step 5
// per day
const course1Step5DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course1Step5Survey1]: '',
		[EndOfDaySurveys.Course1Step5Survey2]: '',
		[EndOfDaySurveys.Course1Step5Survey3]: '',
		[EndOfDaySurveys.Course1Step5Survey4]: '',
	};
	return acc;
}, {});
// per step
export const course1Step5State = {
	...course1Step5DayState,
	[Activities.Course1Step5Activity1]: '',
	[Activities.Course1Step5Activity2]: '',
	[Activities.Course1Step5Activity3]: '',
	[Activities.Course1Step5Activity6]: '',
	[Activities.Course1Step5Activity7]: '',
	[Activities.Course1Step5Resources1a]: '',
	[Activities.Course1Step5Resources1b]: '',
	[Activities.Course1Step5Resources1c]: '',
	[Activities.Course1Step5Resources2a]: '',
	[Activities.Course1Step5Resources2b]: '',
};

// Step 6
// per day
const course1Step6DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course1Step6Survey1]: '',
		[EndOfDaySurveys.Course1Step6Survey2]: '',
		[EndOfDaySurveys.Course1Step6Survey3]: '',
		[EndOfDaySurveys.Course1Step6Survey4]: '',
	};
	return acc;
}, {});
// per step
export const course1Step6State = {
	...course1Step6DayState,
	[Activities.Course1Step6Activity1]: '',
	[Activities.Course1Step6Activity2a]: '',
	[Activities.Course1Step6Activity2b]: '',
	[Activities.Course1Step6Resources2]: '',
};

// Step 7
// per day
const course1Step7DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course1Step7Survey1]: '',
		[EndOfDaySurveys.Course1Step7Survey2]: '',
		[EndOfDaySurveys.Course1Step7Survey3]: '',
		[EndOfDaySurveys.Course1Step7Survey4]: '',
	};
	return acc;
}, {});
// per step
export const course1Step7State = {
	...course1Step7DayState,
	[Activities.Course1Step7Activity3]: '',
};


/*
	------------------------------------------
	COURSE 2
	------------------------------------------
*/


// Step 8
// per day
const course2Step8DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course2Step8Survey1]: '',
		[EndOfDaySurveys.Course2Step8Survey2]: '',
		[EndOfDaySurveys.Course2Step8Survey3]: '',
	};
	return acc;
}, {});
// per step
export const course2Step8State = {
	...course2Step8DayState,
	[Activities.Course2Step8Activity1]: '',
	[Activities.Course2Step8Activity2]: '',
};

// Step 9
// per day
const course2Step9DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course2Step9Survey1]: '',
		[EndOfDaySurveys.Course2Step9Survey2]: '',
		[EndOfDaySurveys.Course2Step9Survey3]: '',
		[EndOfDaySurveys.Course2Step9Survey4]: '',
	};
	return acc;
}, {});
// per step
export const course2Step9State = {
	...course2Step9DayState,
	[Activities.Course2Step9Activity1]: '',
	[Activities.Course2Step9Activity2]: '',
};

// Step 10
// per day
const course2Step10DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course2Step10Survey1]: '',
		[EndOfDaySurveys.Course2Step10Survey2]: '',
		[EndOfDaySurveys.Course2Step10Survey3]: '',
		[EndOfDaySurveys.Course2Step10Survey4]: '',
		[EndOfDaySurveys.Course2Step10Survey5]: '',
	};
	return acc;
}, {});
// per step
export const course2Step10State = {
	...course2Step10DayState,
	[Activities.Course2Step10Activity1]: '',
	[Activities.Course2Step10Activity2]: '',
};

// Step 11
// per day
const course2Step11DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course2Step11Survey1]: '',
		[EndOfDaySurveys.Course2Step11Survey2]: '',
		[EndOfDaySurveys.Course2Step11Survey3]: '',
		[EndOfDaySurveys.Course2Step11Survey4]: '',
		[EndOfDaySurveys.Course2Step11Survey5]: '',
	};
	return acc;
}, {});
// per step
export const course2Step11State = {
	...course2Step11DayState,
	[Activities.Course2Step11Activity1]: '',
	[Activities.Course2Step11Activity2]: '',
	[Activities.Course2Step11Activity3]: '',
};

// Step 12
// per day
const course2Step12DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course2Step12Survey1]: '',
		[EndOfDaySurveys.Course2Step12Survey2]: '',
		[EndOfDaySurveys.Course2Step12Survey3]: '',
		[EndOfDaySurveys.Course2Step12Survey4]: '',
		[EndOfDaySurveys.Course2Step12Survey5]: '',
		[EndOfDaySurveys.Course2Step12Survey5]: '',
	};
	return acc;
}, {});
// per step
export const course2Step12State = {
	...course2Step12DayState,
	[Activities.Course2Step12Activity1]: '',
	[Activities.Course2Step12Activity2]: '',
};

// Step 13
// per day
const course2Step13DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course2Step13Survey1]: '',
		[EndOfDaySurveys.Course2Step13Survey2]: '',
		[EndOfDaySurveys.Course2Step13Survey3]: '',
	};
	return acc;
}, {});
// per step
export const course2Step13State = {
	...course2Step13DayState,
	[Activities.Course2Step13Activity1]: '',
	[Activities.Course2Step13Activity2]: '',
	[Activities.Course2Step13Activity3]: '',
};

// Step 14
// per day
const course2Step14DayState = DayValues.reduce((acc, curr) => {
	acc[curr] = {
		[Surveys.HowAreYouFeeling]: 0,
		[EndOfDaySurveys.Course2Step14Survey1]: '',
		[EndOfDaySurveys.Course2Step14Survey2]: '',
		[EndOfDaySurveys.Course2Step14Survey3]: '',
		[EndOfDaySurveys.Course2Step14Survey4]: '',
	};
	return acc;
}, {});
// per step
export const course2Step14State = {
	...course2Step14DayState,
	[Activities.Course2Step14Activity1]: '',
	[Activities.Course2Step14Activity2]: '',
};
