import { AlertsState } from './reducer/alerts';
import { AudioState } from './reducer/audio';
import { ContactsState } from './reducer/contacts';
import { ModalState } from './reducer/modal';
import { SurveyState } from './types/survey';
import { UserState } from './reducer/user';
import { AppStateState } from './reducer/appState';
import { JournalState } from './reducer/journal';

interface State {
	audio: AudioState;
	alerts: AlertsState,
	appState: AppStateState,
	contacts: ContactsState,
	journals: JournalState,
	modal: ModalState,
	survey: SurveyState,
	user: UserState;
}

export default State;
