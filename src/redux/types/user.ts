export enum UserProperty {
	Id = 'id',
	FirstName = 'first_name',
	LastName = 'last_name',
	Email = 'email',
	PasswordHash = 'password_hash',
	Gender = 'gender',
	AgeGroupStart = 'age_group_start',
	ActivityTime_1 = 'activity_time_1',
	ActivityTime_2 = 'activity_time_2',
	ActivityTime_3 = 'activity_time_3',
	ActivityTime_4 = 'activity_time_4',
	CurrentCourse = 'current_course',
	CurrentStep = 'current_step',
	CurrentDay = 'current_day',
	CurrentActivity = 'current_activity',
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
