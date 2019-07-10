import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Users extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#999',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <button onClick={() => this.props.fetchUsers()}>Fetch users</button>
        {this.props.data.fetching && <h4>Fetching users please wait</h4>}
        {this.props.data &&
          this.props.data.map(user => {
            return (
              <div key={user.id}>
                <h3>Name: {user.name}</h3>
                <h4>Username: {user.username}</h4>
                <p>Email: {user.email}</p>
              </div>
            );
          })}
        {this.props.data.fetched && (
          <button onClick={() => this.props.removeUsers()}>Remove Users</button>
        )}
        {this.props.data.error && <h4>Something went wrong</h4>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.usersReducer.users);
  return {
    data: state.usersReducer.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => {
      dispatch({
        type: 'FETCH_USERS_START'
      });
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          dispatch({
            type: 'RECEIVE_USERS',
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: 'FETCH_ERROR',
            payload: err
          });
        });
    },
    removeUsers: () => {
      dispatch({
        type: 'REMOVE_USERS'
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
