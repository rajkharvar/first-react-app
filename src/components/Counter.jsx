import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';

class Counter extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, light, dark, toggleTheme } = this.context;
    const theme = isDarkTheme ? dark : light;
    return (
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: theme.bg,
            color: theme.text
          }}
        >
          <button type='button' onClick={() => this.props.inc()}>
            +
          </button>
          <h1>{this.props.counter}</h1>
          <button type='button' onClick={() => this.props.dec()}>
            -
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counterReducer.counter
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
