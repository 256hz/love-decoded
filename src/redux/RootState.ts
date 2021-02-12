import { AlertsState } from './reducer/alerts';
import { ModalState } from './reducer/modal';
import { SurveyState } from './types/survey';
import { UserState } from './reducer/user';

interface State {
	alerts: AlertsState,
	modal: ModalState,
	survey: SurveyState,
	user: UserState;
}

export default State;
