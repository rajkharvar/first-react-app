import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  state = {
    counter: 0
  };
  inc = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  dec = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <button onClick={this.inc}>+</button>
        <Counter counter={this.state.counter} />
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default App;
