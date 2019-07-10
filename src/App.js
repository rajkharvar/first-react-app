import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import Users from './components/Users.jsx';
import Todo from './components/Todo';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initState = {
  counter: 0,
  fetching: false,
  fetched: false,
  users: [],
  error: null,
  todos: [{ id: 1, todo: 'Learn redux' }, { id: 2, todo: 'Learn react-router' }]
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
      return { ...state, error: action.payload, fetching: false };
    }
    case 'REMOVE_USERS': {
      return { ...state, users: [], fetched: false };
    }
    case 'ADD_TODO': {
      let newState = { ...state };
      newState.todos.push(action.payload);
      return newState;
    }
    case 'REMOVE_TODO': {
      const filteredState = state.todos.filter(
        todo => todo.id !== action.payload
      );
      return { ...state, todos: filteredState };
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
        <Router>
          <ul
            style={{
              listStyleType: 'none',
              backgroundColor: '#ccc',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingTop: '10px',
              paddingBottom: '10px'
            }}
          >
            <li>
              <Link
                style={{ textDecoration: 'none', color: '#444' }}
                to='/counter'
              >
                Counter
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: '#444' }}
                to='/users'
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: '#444' }}
                to='/todo'
              >
                Todo
              </Link>
            </li>
          </ul>
          <Route path='/counter' component={Counter} />
          <Route path='/users' component={Users} />
          <Route path='/todo' component={Todo} />
        </Router>
      </Provider>
    );
  }
}

export default App;
