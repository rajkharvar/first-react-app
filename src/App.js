import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import Users from './components/Users.jsx';
import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
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
            <Link style={{ textDecoration: 'none', color: '#444' }} to='/users'>
              Users
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none', color: '#444' }} to='/todo'>
              Todo
            </Link>
          </li>
        </ul>
        <Route path='/counter' component={Counter} />
        <Route path='/users' component={Users} />
        <Route path='/todo' component={Todo} />
      </Router>
    );
  }
}

export default App;
