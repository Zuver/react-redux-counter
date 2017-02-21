import { connect } from 'react-redux';
import { incrementCount, decrementCount, doubleCount } from '../actions/counter';
import Counter from '../components/Counter';

const mapStateToProps = state => ({
  counter: state.get('counter'),
});

const mapDispatchToProps = dispatch => ({
  onClickIncrement: () => {
    dispatch(incrementCount);
  },
  onClickDecrement: () => {
    dispatch(decrementCount);
  },
  onClickDouble: () => {
    dispatch(doubleCount);
  },
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
