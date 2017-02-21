import { combineReducers } from 'redux-immutablejs';

// Reducers
import counter from './counter';
import form from './form';

const rootReducer = combineReducers({
  counter,
  form,
});

export default rootReducer;
