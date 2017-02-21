import React from 'react';

// Component containers
import Counter from './containers/Counter';
import Form from './containers/Form';

const Main = () => (
  <div>
    Counter
    <Counter />
    <hr />
    Form
    <Form />
    <hr />
  </div>
);

Main.propTypes = {
  counter: React.PropTypes.number.isRequired,
  form: React.PropTypes.string.isRequired,
};

export default Main;
