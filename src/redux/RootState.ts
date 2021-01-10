import { SurveyState } from './reducer/survey';
import { UserState } from './reducer/user';

interface State {
	survey: SurveyState,
	user: UserState;
}

export default State;
