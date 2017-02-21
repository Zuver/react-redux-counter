import React from 'react';

// This function describes only how to render the Counter component. It contains no explicit
// definition of button-click behavior, but these behaviors may be injected via the props.
function Counter(props) {
  return (
    <div>
      <button onClick={props.onClickDecrement}>-</button>
      <button onClick={props.onClickIncrement}>+</button>
      <button onClick={props.onClickDouble}>Double</button>
      <br />
      <br />
      <div>{props.counter}</div>
    </div>
  );
}

// This object defines the props that the Counter component may use to render and carry out
// specific behavior
Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  onClickIncrement: React.PropTypes.func.isRequired,
  onClickDecrement: React.PropTypes.func.isRequired,
  onClickDouble: React.PropTypes.func.isRequired,
};

// Export the Counter function
export default Counter;
