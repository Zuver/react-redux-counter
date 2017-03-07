import Immutable from 'immutable';
import { SEND_MESSAGE } from '../actions/messenger';

const message = (state = Immutable.fromJS(''), action) => {
  console.log('4. The message reducer is called'); // eslint-disable-line

  switch (action.type) {
    case SEND_MESSAGE:
      return action.value;
    default:
      return state;
  }
};

export default message;
