import { CourseNumber, DayNumber, StepNumber } from './user';

export type SurveyState = {
	[Steps.Zero]: Onboarding;
	[Courses.One]: Course1State;
	[Courses.Two]: Course2State;
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
	// Course 1, Step 1
	Course1Step1Survey1 = 'course1_step1_survey1',
	Course1Step1Survey2 = 'course1_step1_survey2',
	Course1Step1Survey3 = 'course1_step1_survey3',
	Course1Step1Survey4 = 'course1_step1_survey4',
	Course1Step1Survey5 = 'course1_step1_survey5',
	// Course 1, Step 2
	Course1Step2Survey1 = 'course1_step2_survey1',
	Course1Step2Survey2 = 'course1_step2_survey2',
	Course1Step2Survey3 = 'course1_step2_survey3',
	Course1Step2Survey4 = 'course1_step2_survey4',
	// Course 1, Step 3
	Course1Step3Survey1 = 'course1_step3_survey1',
	Course1Step3Survey2 = 'course1_step3_survey2',
	Course1Step3Survey3 = 'course1_step3_survey3',
	// Course 1, Step 4
	Course1Step4Survey1 = 'course1_step4_survey1',
	Course1Step4Survey2 = 'course1_step4_survey2',
	Course1Step4Survey3 = 'course1_step4_survey3',
	Course1Step4Survey4 = 'course1_step4_survey4',
	// Course 1, Step 5
	Course1Step5Survey1 = 'course1_step5_survey1',
	Course1Step5Survey2 = 'course1_step5_survey2',
	Course1Step5Survey3 = 'course1_step5_survey3',
	Course1Step5Survey4 = 'course1_step5_survey4',
	// Course 1, Step 6
	Course1Step6Survey1 = 'course1_step6_survey1',
	Course1Step6Survey2 = 'course1_step6_survey2',
	Course1Step6Survey3 = 'course1_step6_survey3',
	Course1Step6Survey4 = 'course1_step6_survey4',
	// Course 1, Step 7
	Course1Step7Survey1 = 'course1_step7_survey1',
	Course1Step7Survey2 = 'course1_step7_survey2',
	Course1Step7Survey3 = 'course1_step7_survey3',
	Course1Step7Survey4 = 'course1_step7_survey4',
	// Course 2, Step 8
	Course2Step8Survey1 = 'course2_step8_survey1',
	Course2Step8Survey2 = 'course2_step8_survey2',
	Course2Step8Survey3 = 'course2_step8_survey3',
	// Course 2, Step 9
	Course2Step9Survey1 = 'course2_step9_survey1',
	Course2Step9Survey2 = 'course2_step9_survey2',
	Course2Step9Survey3 = 'course2_step9_survey3',
	Course2Step9Survey4 = 'course2_step9_survey4',
	// Course 2, Step 10
	Course2Step10Survey1 = 'course2_step10_survey1',
	Course2Step10Survey2 = 'course2_step10_survey2',
	Course2Step10Survey3 = 'course2_step10_survey3',
	Course2Step10Survey4 = 'course2_step10_survey4',
	Course2Step10Survey5 = 'course2_step10_survey5',
	// Course 2, Step 11
	Course2Step11Survey1 = 'course2_step11_survey1',
	Course2Step11Survey2 = 'course2_step11_survey2',
	Course2Step11Survey3 = 'course2_step11_survey3',
	Course2Step11Survey4 = 'course2_step11_survey4',
	Course2Step11Survey5 = 'course2_step11_survey5',
	// Course 2, Step 12
	Course2Step12Survey1 = 'course2_step12_survey1',
	Course2Step12Survey2 = 'course2_step12_survey2',
	Course2Step12Survey3 = 'course2_step12_survey3',
	Course2Step12Survey4 = 'course2_step12_survey4',
	Course2Step12Survey5 = 'course2_step12_survey5',
	Course2Step12Survey6 = 'course2_step12_survey6',
	// Course 2, Step 13
	Course2Step13Survey1 = 'course2_step13_survey1',
	Course2Step13Survey2 = 'course2_step13_survey2',
	Course2Step13Survey3 = 'course2_step13_survey3',
	// Course 2, Step 14
	Course2Step14Survey1 = 'course2_step14_survey1',
	Course2Step14Survey2 = 'course2_step14_survey2',
	Course2Step14Survey3 = 'course2_step14_survey3',
	Course2Step14Survey4 = 'course2_step14_survey4',
}

export enum Activities {
	// Course 1, Step 1
	Course1Step1Activity1 = 'course1_step1_activity1',
	Course1Step1Activity2a = 'course1_step1_activity2a',
	Course1Step1Activity2b = 'course1_step1_activity2b',
	// Course 1, Step 2
	Course1Step2Activity2a = 'course1_step2_activity2a',
	Course1Step2Activity2b = 'course1_step2_activity2b',
	Course1Step2Activity2c = 'course1_step2_activity2c',
	Course1Step2Activity3a = 'course1_step2_activity3a',
	Course1Step2Activity3b = 'course1_step2_activity3b',
	Course1Step2Activity3c = 'course1_step2_activity3c',
	Course1Step2Activity4 = 'course1_step2_activity4',
	// Course 1, Step 3
	Course1Step3Activity1 = 'course1_step3_activity1',
	Course1Step3Activity2 = 'course1_step3_activity2',
	// Course 1, Step 4
	Course1Step4Activity1 = 'course1_step4_activity1',
	Course1Step4Activity2a = 'course1_step4_activity2a',
	Course1Step4Activity2b = 'course1_step4_activity2b',
	Course1Step4Activity3a = 'course1_step4_activity3a',
	Course1Step4Activity3b = 'course1_step4_activity3b',
	Course1Step4Resources3 = 'course1_step4_resources3',
	// Course 1, Step 5
	Course1Step5Activity1 = 'course1_step5_activity1',
	Course1Step5Activity2 = 'course1_step5_activity2',
	Course1Step5Activity3 = 'course1_step5_activity3',
	Course1Step5Activity6 = 'course1_step5_activity6',
	Course1Step5Activity7 = 'course1_step5_activity7',
	Course1Step5Resources1a = 'course1_step5_resources1a',
	Course1Step5Resources1b = 'course1_step5_resources1b',
	Course1Step5Resources1c = 'course1_step5_resources1c',
	Course1Step5Resources2a = 'course1_step5_resources2a',
	Course1Step5Resources2b = 'course1_step5_resources2b',
	// Course 1, Step 6
	Course1Step6Activity1 = 'course1_step6_activity1',
	Course1Step6Activity2a = 'course1_step6_activity2a',
	Course1Step6Activity2b = 'course1_step6_activity2b',
	Course1Step6Resources2 = 'course1_step6_resources2',
	// Course 1, Step 7
	Course1Step7Activity1 = 'course1_step7_activity1',
	Course1Step7Activity2 = 'course1_step7_activity2',
	Course1Step7Activity3 = 'course1_step7_activity3',
	// Course 2, Step 8
	Course2Step8Activity1 = 'course2_step8_activity1',
	Course2Step8Activity2 = 'course2_step8_activity2',
	// Course 2, Step 9
	Course2Step9Activity1 = 'course2_step9_activity1',
	Course2Step9Activity2 = 'course2_step9_activity2',
	// Course 2, Step 10
	Course2Step10Activity1 = 'course2_step10_activity1',
	Course2Step10Activity2 = 'course2_step10_activity2',
	// Course 2, Step 11
	Course2Step11Activity1 = 'course2_step11_activity1',
	Course2Step11Activity2 = 'course2_step11_activity2',
	Course2Step11Activity3 = 'course2_step11_activity3',
	// Course 2, Step 12
	Course2Step12Activity1 = 'course2_step12_activity1',
	Course2Step12Activity2 = 'course2_step12_activity2',
	// Course 2, Step 13
	Course2Step13Activity1 = 'course2_step13_activity1',
	Course2Step13Activity2 = 'course2_step13_activity2',
	Course2Step13Activity3 = 'course2_step13_activity3',
	// Course 2, Step 14
	Course2Step14Activity1 = 'course2_step14_activity1',
	Course2Step14Activity2 = 'course2_step14_activity2',
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
	Zero = 'onboarding',
	One = 'step1',
	Two = 'step2',
	Three = 'step3',
	Four = 'step4',
	Five = 'step5',
	Six = 'step6',
	Seven = 'step7',
	Eight = 'step8',
	Nine = 'step9',
	Ten = 'step10',
	Eleven = 'step11',
	Twelve = 'step12',
	Thirteen = 'step13',
	Fourteen = 'step14',
	Fifteen = 'step15',
	Sixteen = 'step16',
	Seventeen = 'step17',
	Eighteen = 'step18',
	Nineteen = 'step19',
	Twenty = 'step20',
	Twentyone = 'step21',
}

export enum Days {
	Zero = 'day0', // for activities surveys
	One = 'day1',
	Two = 'day2',
	Three = 'day3',
	Four = 'day4',
	Five = 'day5',
	Six = 'day6',
	Seven = 'day7',
}

export const DayValues = Object.keys(Days)
	.slice(1) // do not include day 0
	.filter(key => typeof Days[key] === 'string')
	.map(day => Days[day]);

export const DayFromNumber: Days[] = [
	Days.Zero, // for activities
	Days.One,
	Days.Two,
	Days.Three,
	Days.Four,
	Days.Five,
	Days.Six,
	Days.Seven,
];

export const NumberFromDay: { [key in Days]: DayNumber } = {
	[Days.Zero]: 0, // for activities
	[Days.One]: 1,
	[Days.Two]: 2,
	[Days.Three]: 3,
	[Days.Four]: 4,
	[Days.Five]: 5,
	[Days.Six]: 6,
	[Days.Seven]: 7,
};

export const CourseFromNumber: Courses[] = [
	Courses.One, // empty (1-indexed)
	Courses.One,
	Courses.Two,
	Courses.Three,
];

export const NumberFromCourse: { [key in Courses]: CourseNumber } = {
	[Courses.Onboarding]: 1,
	[Courses.One]: 1,
	[Courses.Two]: 2,
	[Courses.Three]: 3,
};

export const AllCourses = CourseFromNumber.slice(1);

export const StepFromNumber: Steps[] = [
	Steps.Zero, // onboarding
	Steps.One,
	Steps.Two,
	Steps.Three,
	Steps.Four,
	Steps.Five,
	Steps.Six,
	Steps.Seven,
	Steps.Eight,
	Steps.Nine,
	Steps.Ten,
	Steps.Eleven,
	Steps.Twelve,
	Steps.Thirteen,
	Steps.Fourteen,
	Steps.Fifteen,
	Steps.Sixteen,
	Steps.Seventeen,
	Steps.Eighteen,
	Steps.Nineteen,
	Steps.Twenty,
	Steps.Twentyone,
];

export const NumberFromStep: { [key in Steps]: StepNumber } = {
	[Steps.Zero]: 0, // onboarding
	[Steps.One]: 1,
	[Steps.Two]: 2,
	[Steps.Three]: 3,
	[Steps.Four]: 4,
	[Steps.Five]: 5,
	[Steps.Six]: 6,
	[Steps.Seven]: 7,
	[Steps.Eight]: 8,
	[Steps.Nine]: 9,
	[Steps.Ten]: 10,
	[Steps.Eleven]: 11,
	[Steps.Twelve]: 12,
	[Steps.Thirteen]: 13,
	[Steps.Fourteen]: 14,
	[Steps.Fifteen]: 15,
	[Steps.Sixteen]: 16,
	[Steps.Seventeen]: 17,
	[Steps.Eighteen]: 18,
	[Steps.Nineteen]: 19,
	[Steps.Twenty]: 20,
	[Steps.Twentyone]: 21,
};

export const CourseFromStep: { [key in Steps]: Courses } = {
	[Steps.Zero]: Courses.One, // onboarding
	[Steps.One]: Courses.One,
	[Steps.Two]: Courses.One,
	[Steps.Three]: Courses.One,
	[Steps.Four]: Courses.One,
	[Steps.Five]: Courses.One,
	[Steps.Six]: Courses.One,
	[Steps.Seven]: Courses.One,
	[Steps.Eight]: Courses.Two,
	[Steps.Nine]: Courses.Two,
	[Steps.Ten]: Courses.Two,
	[Steps.Eleven]: Courses.Two,
	[Steps.Twelve]: Courses.Two,
	[Steps.Thirteen]: Courses.Two,
	[Steps.Fourteen]: Courses.Two,
	[Steps.Fifteen]: Courses.Three,
	[Steps.Sixteen]: Courses.Three,
	[Steps.Seventeen]: Courses.Three,
	[Steps.Eighteen]: Courses.Three,
	[Steps.Nineteen]: Courses.Three,
	[Steps.Twenty]: Courses.Three,
	[Steps.Twentyone]: Courses.Three,
};

export const AllSteps = StepFromNumber.slice(1);

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
	[Steps.Three]: Course1Step3;
	[Steps.Four]: Course1Step4;
	[Steps.Five]: Course1Step5;
	[Steps.Six]: Course1Step6;
	[Steps.Seven]: Course1Step7;
};

export type Course2State = {
	[Steps.Eight]: Course2Step8;
	[Steps.Nine]: Course2Step9;
	[Steps.Ten]: Course2Step10;
	[Steps.Eleven]: Course2Step11;
	[Steps.Twelve]: Course2Step12;
	[Steps.Thirteen]: Course2Step13;
	[Steps.Fourteen]: Course2Step14;
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
		[EndOfDaySurveys.Course1Step2Survey1]: string,
		[EndOfDaySurveys.Course1Step2Survey3]: string,
		[EndOfDaySurveys.Course1Step2Survey2]: string,
		[EndOfDaySurveys.Course1Step2Survey4]: string,
	};
};

export type Course1Step3 = {
	[Activities.Course1Step3Activity1]: string;
	[Activities.Course1Step3Activity2]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course1Step3Survey1]: string,
		[EndOfDaySurveys.Course1Step3Survey2]: string,
		[EndOfDaySurveys.Course1Step3Survey3]: string,
	};
};

export type Course1Step4 = {
	[Activities.Course1Step4Activity1]: string;
	[Activities.Course1Step4Activity2a]: string;
	[Activities.Course1Step4Activity2b]: string;
	[Activities.Course1Step4Activity3a]: string;
	[Activities.Course1Step4Activity3b]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course1Step4Survey1]: string,
		[EndOfDaySurveys.Course1Step4Survey2]: string,
		[EndOfDaySurveys.Course1Step4Survey3]: string,
		[EndOfDaySurveys.Course1Step4Survey4]: string,
	};
};

export type Course1Step5 = {
	[Activities.Course1Step5Activity1]: string;
	[Activities.Course1Step5Activity2]: string;
	[Activities.Course1Step5Activity3]: string;
	[Activities.Course1Step5Activity6]: string;
	[Activities.Course1Step5Activity7]: string;
	[Activities.Course1Step5Resources1a]: string;
	[Activities.Course1Step5Resources1b]: string;
	[Activities.Course1Step5Resources1c]: string;
	[Activities.Course1Step5Resources2a]: string;
	[Activities.Course1Step5Resources2b]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course1Step5Survey1]: string,
		[EndOfDaySurveys.Course1Step5Survey2]: string,
		[EndOfDaySurveys.Course1Step5Survey3]: string,
		[EndOfDaySurveys.Course1Step5Survey4]: string,
	};
};

export type Course1Step6 = {
	[Activities.Course1Step6Activity1]: string;
	[Activities.Course1Step6Activity2a]: string;
	[Activities.Course1Step6Activity2b]: string;
	[Activities.Course1Step6Resources2]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course1Step6Survey1]: string,
		[EndOfDaySurveys.Course1Step6Survey2]: string,
		[EndOfDaySurveys.Course1Step6Survey3]: string,
		[EndOfDaySurveys.Course1Step6Survey4]: string,
	};
};

export type Course1Step7 = {
	[Activities.Course1Step7Activity3]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course1Step7Survey1]: string,
		[EndOfDaySurveys.Course1Step7Survey2]: string,
		[EndOfDaySurveys.Course1Step7Survey3]: string,
		[EndOfDaySurveys.Course1Step7Survey4]: string,
	};
};

export type Course2Step8 = {
	[Activities.Course2Step8Activity1]: string;
	[Activities.Course2Step8Activity2]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course2Step8Survey1]: string,
		[EndOfDaySurveys.Course2Step8Survey2]: string,
		[EndOfDaySurveys.Course2Step8Survey3]: string,
	};
};

export type Course2Step9 = {
	[Activities.Course2Step9Activity1]: string;
	[Activities.Course2Step9Activity2]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course2Step9Survey1]: string,
		[EndOfDaySurveys.Course2Step9Survey2]: string,
		[EndOfDaySurveys.Course2Step9Survey3]: string,
		[EndOfDaySurveys.Course2Step9Survey4]: string,
	};
};

export type Course2Step10 = {
	[Activities.Course2Step10Activity1]: string;
	[Activities.Course2Step10Activity2]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course2Step10Survey1]: string,
		[EndOfDaySurveys.Course2Step10Survey2]: string,
		[EndOfDaySurveys.Course2Step10Survey3]: string,
		[EndOfDaySurveys.Course2Step10Survey4]: string,
		[EndOfDaySurveys.Course2Step10Survey5]: string,
	};
};

export type Course2Step11 = {
	[Activities.Course2Step11Activity1]: string;
	[Activities.Course2Step11Activity2]: string;
	[Activities.Course2Step11Activity3]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course2Step11Survey1]: string,
		[EndOfDaySurveys.Course2Step11Survey2]: string,
		[EndOfDaySurveys.Course2Step11Survey3]: string,
		[EndOfDaySurveys.Course2Step11Survey4]: string,
		[EndOfDaySurveys.Course2Step11Survey5]: string,
	};
};

export type Course2Step12 = {
	[Activities.Course2Step12Activity1]: string;
	[Activities.Course2Step12Activity2]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course2Step12Survey1]: string,
		[EndOfDaySurveys.Course2Step12Survey2]: string,
		[EndOfDaySurveys.Course2Step12Survey3]: string,
		[EndOfDaySurveys.Course2Step12Survey4]: string,
		[EndOfDaySurveys.Course2Step12Survey5]: string,
		[EndOfDaySurveys.Course2Step12Survey6]: string,
	};
};


export type Course2Step13 = {
	[Activities.Course2Step13Activity1]: string;
	[Activities.Course2Step13Activity2]: string;
	[Activities.Course2Step13Activity3]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course2Step13Survey1]: string,
		[EndOfDaySurveys.Course2Step13Survey2]: string,
		[EndOfDaySurveys.Course2Step13Survey3]: string,
	};
};

export type Course2Step14 = {
	[Activities.Course2Step14Activity1]: string;
	[Activities.Course2Step14Activity2]: string;
} & {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[EndOfDaySurveys.Course2Step14Survey1]: string,
		[EndOfDaySurveys.Course2Step14Survey2]: string,
		[EndOfDaySurveys.Course2Step14Survey3]: string,
		[EndOfDaySurveys.Course2Step14Survey4]: string,
	};
};

export type RemoteSurvey = {
	id: string,
	user_id: string,
	survey_id: string,
	survey_response: string,
	course: number,
	step: number,
	day: number,
};

export type SurveyResponse = HowAreYouFeelingResponse | NeffSurveyResponse | YesNo | string | string[];
export type HowAreYouFeelingResponse = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type NeffSurveyPageIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type NeffSurveyResponse = 1 | 2 | 3 | 4 | 5;
export type YesNo = 'yes' | 'no';
