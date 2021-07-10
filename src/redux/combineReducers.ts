import { AnyAction, CombinedState, combineReducers } from 'redux';
import * as reducers from './reducer';
import { AlertsState } from './reducer/alerts';
import { AppStateState } from './reducer/appState';
import { AudioState } from './reducer/audio';
import { ContactsState } from './reducer/contacts';
import { JournalState } from './reducer/journal';
import { UserState } from './reducer/user';
import { SurveyState } from './types/survey';

export const reducer = combineReducers(reducers);

type RootState = CombinedState<{
	alerts: AlertsState;
	appState: AppStateState;
	audio: AudioState;
	contacts: ContactsState;
	journals: JournalState;
	survey: SurveyState;
	user: UserState;
}> | undefined;

export const rootReducer = (state: RootState, action: AnyAction) => reducer(state, action);
