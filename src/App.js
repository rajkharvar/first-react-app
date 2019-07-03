import React, { Component } from 'react';
import Counter from './components/Counter.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = {
  counter: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC': {
      return { counter: state.counter + 1 };
    }
    case 'DEC': {
      return { counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
