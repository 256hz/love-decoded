import { createAction } from '@reduxjs/toolkit';
import { AppStateStatus } from 'react-native';
import { OnboardingScreens, StepScreens } from 'route/enums';

export const setAppState = createAction('SET_APP_STATE',
	(status: AppStateStatus) => ({ payload: { status } }));

export const setLastActiveEpochSeconds = createAction('SET_LAST_ACTIVE_EPOCH_SECONDS',
	(epochSeconds: number) => ({ payload: { epochSeconds } }));

export const appActivated = createAction('APP_ACTIVATED');

export const appBackgrounded = createAction('APP_BACKGROUNDED');

export const appInactivated = createAction('APP_INACTIVATED');

export const setCurrentRouteName = createAction('SET_CURRENT_ROUTE_NAME',
	(route: OnboardingScreens | StepScreens) => ({ payload: { route } }));
