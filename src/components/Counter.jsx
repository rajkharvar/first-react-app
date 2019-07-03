import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button type='button' onClick={() => this.props.inc()}>
          +
        </button>
        <h1>{this.props.counter}</h1>
        <button type='button' onClick={() => this.props.dec()}>
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => {
      dispatch({
        type: 'INC'
      });
    },
    dec: () => {
      dispatch({
        type: 'DEC'
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
