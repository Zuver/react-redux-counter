import { connect } from 'react-redux';

import Main from './Main';

function mapStateToProps(state) {
  return {
    counter: state.get('counter'),
    form: state.get('form'),
  };
}

const App = connect(mapStateToProps)(Main);

export default App;
