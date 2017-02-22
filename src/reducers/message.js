import Immutable from 'immutable';
import { SEND_MESSAGE } from '../actions/messenger';

const message = (state = Immutable.fromJS(''), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.value;
    default:
      return state;
  }
};

export default message;
