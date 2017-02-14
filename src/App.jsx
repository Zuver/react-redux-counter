import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers/counter';
import { incrementCount, decrementCount, doubleCount } from './actions/counter';

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Counter
        value={store.getState()}
        onClickIncrement={() => store.dispatch(incrementCount)}
        onClickDecrement={() => store.dispatch(decrementCount)}
        onClickDouble={() => store.dispatch(doubleCount)}
      />
    </Provider>,
    document.getElementById('root')
  );
};

// Each time the store broadcasts a state change, the render function is called
store.subscribe(render);

// When the application initially starts, there will be no state changes
// so we have to manually call render the first time
render();
