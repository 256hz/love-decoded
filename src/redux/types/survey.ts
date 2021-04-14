export type SurveyState = {
	onboarding: Onboarding;
	course1: Course1State;
};

export enum Surveys {
	Dependency = 'dependency',
	AcknowledgingYourPast = 'acknowledging_your_past',
	CanYouControlIt = 'can_you_control_it',
	Neff = 'neff',
	WhatWouldILikeToLearn = 'what_would_i_like_to_learn',
	HowAreYouFeeling = 'how_are_you_feeling',
}

export enum EndOfDaySurveys {
	Course1Step1Survey1 = 'course1_step1_survey1',
	Course1Step1Survey2 = 'course1_step1_survey2',
	Course1Step1Survey3 = 'course1_step1_survey3',
	Course1Step1Survey4 = 'course1_step1_survey4',
	Course1Step1Survey5 = 'course1_step1_survey5',
	Course1Step2Survey1 = 'course1_step2_survey1',
	Course1Step2Survey2 = 'course1_step2_survey2',
	Course1Step2Survey3 = 'course1_step2_survey3',
	Course1Step2Survey4 = 'course1_step2_survey4',
}

export enum Activities {
	Course1Step1Activity1 = 'course1_step1_activity1',
	Course1Step1Activity2a = 'course1_step1_activity2a',
	Course1Step1Activity2b = 'course1_step1_activity2b',
	Course1Step2Activity2a = 'course1_step2_activity2a',
	Course1Step2Activity2b = 'course1_step2_activity2b',
	Course1Step2Activity2c = 'course1_step2_activity2c',
	Course1Step2Activity3a = 'course1_step2_activity3a',
	Course1Step2Activity3b = 'course1_step2_activity3b',
	Course1Step2Activity3c = 'course1_step2_activity3c',
	Course1Step2Activity4 = 'course1_step2_activity4',
}

export enum Courses {
	Onboarding = 'onboarding',
	One = 'course1',
	Two = 'course2',
	Three = 'course3',
}

export enum StepCourses {
	One = 'course1',
	Two = 'course2',
	Three = 'course3',
}

export enum Steps {
	One = 'step1',
	Two = 'step2',
	Three = 'step3',
	Four = 'step4',
	Five = 'step5',
	Six = 'step6',
	Seven = 'step7',
}

export enum Days {
	One = 'day1',
	Two = 'day2',
	Three = 'day3',
	Four = 'day4',
	Five = 'day5',
	Six = 'day6',
	Seven = 'day7',
}

export const DayValues = Object.keys(Days)
	.filter(key => typeof Days[key] === 'string')
	.map(day => Days[day]);

export const DayFromNumber: Days[] = [
	Days.One, // empty (1-indexed)
	Days.One,
	Days.Two,
	Days.Three,
	Days.Four,
	Days.Five,
	Days.Six,
	Days.Seven,
];

export const CourseFromNumber: Courses[] = [
	Courses.One, // empty (1-indexed)
	Courses.One,
	Courses.Two,
	Courses.Three,
];

export const StepFromNumber: Steps[] = [
	Steps.One, // empty (1-indexed)
	Steps.One,
	Steps.Two,
	Steps.Three,
	Steps.Four,
	Steps.Five,
	Steps.Six,
	Steps.Seven,
];

export type Onboarding = {
	[Surveys.AcknowledgingYourPast]?: string[];
	[Surveys.CanYouControlIt]?: YesNo;
	[Surveys.Dependency]?: YesNo;
	[Surveys.Neff]: number[];
	[Surveys.WhatWouldILikeToLearn]?: string[];
};

export type Course1State = {
	[Steps.One]: Course1Step1;
	[Steps.Two]: Course1Step2;
};

export type Course1Step1 = {
	[Activities.Course1Step1Activity1]: string;
	[Activities.Course1Step1Activity2a]: string;
	[Activities.Course1Step1Activity2b]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course1Step1Survey1]: string,
		[EndOfDaySurveys.Course1Step1Survey3]: string,
		[EndOfDaySurveys.Course1Step1Survey2]: string,
		[EndOfDaySurveys.Course1Step1Survey4]: string,
		[EndOfDaySurveys.Course1Step1Survey5]: string,
	};
};

export type Course1Step2 = {
	[Activities.Course1Step2Activity2a]: string;
	[Activities.Course1Step2Activity2b]: string;
	[Activities.Course1Step2Activity2c]: string;
	[Activities.Course1Step2Activity3a]: string;
	[Activities.Course1Step2Activity3b]: string;
	[Activities.Course1Step2Activity3b]: string;
	[Activities.Course1Step2Activity4]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
	};
};

export type SurveyResponse = HowAreYouFeelingResponse | NeffSurveyResponse | YesNo | string | string[];
export type HowAreYouFeelingResponse = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type NeffSurveyPageIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type NeffSurveyResponse = 1 | 2 | 3 | 4 | 5;
export type YesNo = 'yes' | 'no';
