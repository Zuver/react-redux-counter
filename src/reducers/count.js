import Immutable from 'immutable';
import { INCREMENT_COUNT, DECREMENT_COUNT, DOUBLE_COUNT } from '../actions/counter';

const count = (state = Immutable.fromJS(0), action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    case DOUBLE_COUNT:
      return state * 2;
    default:
      return state;
  }
};

export default count;
