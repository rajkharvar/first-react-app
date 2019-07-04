import React, { Component } from 'react';
import Counter from './components/Counter.jsx';
import Users from './components/Users.jsx';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initState = {
  counter: 0,
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC': {
      return { ...state, counter: state.counter + 1 };
    }
    case 'DEC': {
      return { ...state, counter: state.counter - 1 };
    }
    case 'FETCH_USERS_START': {
      return { ...state, fetching: true };
    }
    case 'RECEIVE_USERS': {
      return {
        ...state,
        fetched: true,
        fetching: false,
        users: action.payload
      };
    }
    case 'FETCH_ERROR': {
      return { ...state, error: action.payload };
    }
    case 'REMOVE_USERS': {
      return { ...state, users: [], fetched: false };
    }
    default:
      return state;
  }
};

const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducer, middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <hr />
        <Users />
      </Provider>
    );
  }
}

export default App;
