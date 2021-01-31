export type SurveyState = {
	[Surveys.AcknowledgingYourPast]?: string[],
	[Surveys.CanYouControlIt]?: YesNo,
	[Surveys.Dependency]?: YesNo,
	[Surveys.Neff]: number[],
	[Surveys.WhatWouldILikeToLearn]?: string[],
};

export enum Surveys {
	Dependency = 'dependency',
	AcknowledgingYourPast = 'acknowledging_your_past',
	CanYouControlIt = 'can_you_control_it',
	Neff = 'neff',
	WhatWouldILikeToLearn = 'what_would_i_like_to_learn',
}

export type YesNo = 'yes' | 'no';

export type NeffSurveyPageIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type NeffSurveyResponse = 1 | 2 | 3 | 4 | 5;
