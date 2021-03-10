export enum UserProperty {
	ID = 'id',
	FIRST_NAME = 'first_name',
	LAST_NAME = 'last_name',
	EMAIL = 'email',
	PASSWORD_HASH = 'password_hash',
	GENDER = 'gender',
	AGE_GROUP_START = 'age_group_start',
	ACTIVITY_TIME_1 = 'activity_time_1',
	ACTIVITY_TIME_2 = 'activity_time_2',
	ACTIVITY_TIME_3 = 'activity_time_3',
	ACTIVITY_TIME_4 = 'activity_time_4',
	CURRENT_COURSE = 'current_course',
	CURRENT_STEP = 'current_step',
	CURRENT_DAY = 'current_day',
	CURRENT_ACTIVITY = 'current_activity',
}

export type AgeGroup = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export enum Activity {
	Morning = 1,
	Afternoon = 2,
	Evening = 3,
	Bedtime = 4,
}

export type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Course = 1 | 2 | 3;
