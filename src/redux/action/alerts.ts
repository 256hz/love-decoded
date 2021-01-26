import { createAction } from '@reduxjs/toolkit';
import { AlertTime } from 'redux/types/alerts';

export const setAlertTime = createAction('SET_ALERT_TIME',
	(alert: AlertTime, time: number) => ({ payload: { alert, time } }));
