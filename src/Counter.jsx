import React from 'react';

function Counter(props) {
  return (
    <div>
      <button onClick={props.onClickDecrement}>-</button>
      <button onClick={props.onClickIncrement}>+</button>
    </div>
  );
}

Counter.propTypes = {
  onClickIncrement: React.PropTypes.func.isRequired,
  onClickDecrement: React.PropTypes.func.isRequired,
};

export default Counter;
