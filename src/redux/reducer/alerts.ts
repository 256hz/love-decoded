import { createReducer } from '@reduxjs/toolkit';
import { setAlertTime } from '@redux/action';
import { AlertTime } from '@redux/types/alerts';

export type AlertsState = {
	[key in AlertTime]: number;
};

const INITIAL_STATE: AlertsState = {
	[AlertTime.Morning]: 5 * 60,  // 5am
	[AlertTime.Activities]: 11 * 60,  // 11am
	[AlertTime.Survey]: 14 * 60,  // 2pm
	[AlertTime.Reflection]: 17 * 60,  // 5pm
};

export const alerts = createReducer(INITIAL_STATE, reducer => {
	reducer
		.addCase(setAlertTime, (state, { payload: { alert, time } }) => ({ ...state, [alert]: time }));
});
