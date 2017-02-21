import Immutable from 'immutable';
import { SUBMIT } from '../actions/form';

const form = (state = Immutable.fromJS(''), action) => {
  switch (action.type) {
    case SUBMIT:
      return action.value;
    default:
      return state;
  }
};

export default form;
