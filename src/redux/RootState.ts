import { AlertsState } from './reducer/alerts';
import { ContactsState } from './reducer/contacts';
import { ModalState } from './reducer/modal';
import { SurveyState } from './types/survey';
import { UserState } from './reducer/user';

interface State {
	alerts: AlertsState,
	contacts: ContactsState,
	modal: ModalState,
	survey: SurveyState,
	user: UserState;
}

export default State;
