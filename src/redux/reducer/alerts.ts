import { createReducer } from '@reduxjs/toolkit';
import { setAlertTime } from '@redux/action';
import { AlertTime } from '@redux/types/alerts';

export type AlertsState = {
	[key in AlertTime]: string; // 24hr - 'HH:mm'
};

// minutes from midnight
const INITIAL_STATE: AlertsState = {
	[AlertTime.Morning]: '05:00',
	[AlertTime.Activities]: '11:00',
	[AlertTime.Survey]: '14:00',
	[AlertTime.Reflection]: '17:00',
};

export const alerts = createReducer(INITIAL_STATE, ({ addCase }) => {
	addCase(setAlertTime, (state, { payload: { alert, time } }) => ({ ...state, [alert]: time }));
});
