import React from 'react';
import { connect } from 'react-redux';
import { submit } from '../actions/messenger';

const Form = ({ message, onClickSubmit }) => {
  console.log('5. Messenger component is being rendered'); // eslint-disable-line

  let input;

  return (
    <div>
      Send a message to the Redux store
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          console.log('1. Submit button was clicked'); // eslint-disable-line
          onClickSubmit(input.value);
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button>
          Submit
        </button>
      </form>
      <br />
      <div>
        {message}
      </div>
    </div>
  );
};

Form.propTypes = {
  message: React.PropTypes.string.isRequired,
  onClickSubmit: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    message: state.get('message'),
  };
}

const mapDispatchToProps = dispatch => ({
  onClickSubmit: (value) => {
    dispatch(submit(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
