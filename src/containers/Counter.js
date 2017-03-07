import { connect } from 'react-redux';
import { incrementCount, decrementCount, doubleCount } from '../actions/counter';
import Counter from '../components/Counter';

const mapStateToProps = state => ({
  count: state.get('count'),
});

const mapDispatchToProps = dispatch => ({
  onClickIncrement: () => {
    console.log('1. + button was clicked'); // eslint-disable-line
    dispatch(incrementCount());
  },
  onClickDecrement: () => {
    console.log('1. - button was clicked'); // eslint-disable-line
    dispatch(decrementCount());
  },
  onClickDouble: () => {
    console.log('1. Double button was clicked'); // eslint-disable-line
    dispatch(doubleCount());
  },
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
