import { createSelector } from '@reduxjs/toolkit';
import State from '@redux/RootState';
import { AlertTime } from '@redux/types/alerts';

const alerts = (state: State) => (state || {}).alerts || {};

export const getAlertTime = (type: AlertTime) => createSelector(alerts, alertsState => alertsState[type]);
