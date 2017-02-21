import { createStore } from 'redux';
import Immutable from 'immutable';
import rootreducer from './reducers';

const state = Immutable.fromJS({
  counter: 0,
  form: '',
});

const initialState = rootreducer(state, {
  type: 'CONSTRUCT',
});

export default createStore(rootreducer, initialState);
