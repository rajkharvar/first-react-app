import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return <h1>{this.props.counter}</h1>;
  }
}

const counter = {
  color: 'red',
  fontSize: 12
};

export default Counter;
