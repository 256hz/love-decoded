import { AudioState } from './reducer/audio';
import { UserState } from './reducer/user';

interface State {
	user: UserState;
	audio: AudioState;
}

export default State;
