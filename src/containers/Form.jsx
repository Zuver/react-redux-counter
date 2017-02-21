import React from 'react';
import { connect } from 'react-redux';
import { submit } from '../actions/form';

const Form = ({ value, onClickSubmit }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
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
        {value}
      </div>
    </div>
  );
};

Form.propTypes = {
  value: React.PropTypes.string.isRequired,
  onClickSubmit: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    value: state.get('form'),
  };
}

const mapDispatchToProps = dispatch => ({
  onClickSubmit: (value) => {
    dispatch(submit(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
