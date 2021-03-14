export type SurveyState = {
	onboarding: Onboarding;
	course1: Course1;
};

export enum Surveys {
	Dependency = 'dependency',
	AcknowledgingYourPast = 'acknowledging_your_past',
	CanYouControlIt = 'can_you_control_it',
	Neff = 'neff',
	WhatWouldILikeToLearn = 'what_would_i_like_to_learn',
	HowAreYouFeeling = 'how_are_you_feeling',
}

export enum Activities {
	LovableQualitiesSelf = 'lovable_qualities_self',
	LovableQualitiesOthersMissing = 'lovable_qualities_others_missing',
	LovableQualitiesOthersDoNotAgree = 'lovable_qualities_others_do_not_agree',
	SelfTalkPositivelySituations = 'self_talk_positively_situations',
	SelfTalkPositivelyReaction = 'self_talk_positively_reaction',
	SelfTalkPositivelyRevision = 'self_talk_positively_revision',
}

export enum Courses {
	Onboarding = 'onboarding',
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

export const DayValues = Object.keys(Days).filter(key => typeof Days[key] === 'string').map(day => Days[day]);

export const DayFromNumber = [
	Days.One,
	Days.One,
	Days.Two,
	Days.Three,
	Days.Four,
	Days.Five,
	Days.Six,
	Days.Seven,
];

export type Onboarding = {
	[Surveys.AcknowledgingYourPast]?: string[];
	[Surveys.CanYouControlIt]?: YesNo;
	[Surveys.Dependency]?: YesNo;
	[Surveys.Neff]: number[];
	[Surveys.WhatWouldILikeToLearn]?: string[];
};

export type Course1 = {
	[Steps.One]: Course1Step1;
	[Steps.Two]: Course1Step2;
};

export type Course1Step1 = {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[Activities.LovableQualitiesSelf]: string;
		[Activities.LovableQualitiesOthersMissing]: string;
		[Activities.LovableQualitiesOthersDoNotAgree]: string;
	};
};

export type Course1Step2 = {
	[key in Days]: {
		[Surveys.HowAreYouFeeling]: HowAreYouFeelingResponse;
		[Activities.SelfTalkPositivelySituations]: string;
		[Activities.SelfTalkPositivelyReaction]: string;
		[Activities.SelfTalkPositivelyRevision]: string;
	};
};

export type SurveyResponse = HowAreYouFeelingResponse | NeffSurveyResponse | YesNo | string | string[];

export type HowAreYouFeelingResponse = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type NeffSurveyPageIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type NeffSurveyResponse = 1 | 2 | 3 | 4 | 5;
export type YesNo = 'yes' | 'no';
