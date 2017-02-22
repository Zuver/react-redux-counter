import { combineReducers } from 'redux-immutablejs';

// Reducers
import count from './count';
import message from './message';

const rootReducer = combineReducers({
  count,
  message,
});

export default rootReducer;
