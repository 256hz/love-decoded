import { createAction } from '@reduxjs/toolkit';
import { AlertTime } from '@redux/types/alerts';


// time string - 24hr 'HH:mm' (04:30, 15:00)
export const setAlertTime = createAction('SET_ALERT_TIME',
	(alert: AlertTime, time: string) => ({ payload: { alert, time } }));
