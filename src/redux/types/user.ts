export enum UserProperty {
	AccessToken = 'accessToken',
	ActivityTime_1 = 'activity_time_1',
	ActivityTime_2 = 'activity_time_2',
	ActivityTime_3 = 'activity_time_3',
	ActivityTime_4 = 'activity_time_4',
	AgeGroupStart = 'age_group_start',
	CurrentActivity = 'current_activity',
	CurrentCourse = 'current_course',
	CurrentDay = 'current_day',
	CurrentStep = 'current_step',
	Email = 'email',
	FirstName = 'first_name',
	Gender = 'gender',
	Id = 'id',
	LastName = 'last_name',
	MaxActivity = 'max_activity',
	MaxCourse = 'max_course',
	MaxDay = 'max_day',
	MaxStep = 'max_step',
	MaxPurchasedCourse = 'max_purchased_course',
	PasswordHash = 'password_hash',
}

export type AgeGroup = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export enum Activity {
	Morning = 1,
	Afternoon = 2,
	Evening = 3,
	Bedtime = 4,
}

export type DayNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type StepNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;

export type CourseNumber = 1 | 2 | 3;
