import React from 'react';

// This component is an example of a "dumb component". It contains no behavior implementation.
// This component only defines how to render something.
// All behaviors are passed to this component via the props.
function Counter(props) {
  console.log('5. Counter component is being rendered'); // eslint-disable-line

  return (
    <div>
      Counter
      <br />
      <button onClick={props.onClickDecrement}>-</button>
      <button onClick={props.onClickIncrement}>+</button>
      <button onClick={props.onClickDouble}>Double</button>
      <br />
      <br />
      <div>{props.count}</div>
    </div>
  );
}

// This object defines the props that the Counter component may use to render and carry out
// specific behavior
Counter.propTypes = {
  count: React.PropTypes.number.isRequired,
  onClickIncrement: React.PropTypes.func.isRequired,
  onClickDecrement: React.PropTypes.func.isRequired,
  onClickDouble: React.PropTypes.func.isRequired,
};

// Export the Counter function
export default Counter;
