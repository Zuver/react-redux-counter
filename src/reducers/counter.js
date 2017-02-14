import Immutable from 'immutable';
import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/counter';

const counter = (state = Immutable.fromJS(0), action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
