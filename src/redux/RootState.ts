import { AlertsState } from './reducer/alerts';
import { SurveyState } from './types/survey';
import { UserState } from './reducer/user';

interface State {
	alerts: AlertsState,
	survey: SurveyState,
	user: UserState;
}

export default State;
