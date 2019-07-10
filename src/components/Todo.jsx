import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.random(),
      todo: ''
    };
  }
  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ todo: '', id: Math.random() });
  };
  render() {
    return (
      <div>
        <h1>Todos:</h1>
        {this.props.todos &&
          this.props.todos.map(todo => {
            return (
              <div key={todo.id}>
                <h4 onClick={() => this.props.removeTodo(todo.id)}>
                  {todo.todo}
                </h4>
              </div>
            );
          })}
        <form action='submit' onSubmit={this.handleSubmit}>
          <label htmlFor='todo'>Todo</label>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.todo}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.todoReducer.todos);
  return {
    todos: state.todoReducer.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => {
      if (todo.todo === '') {
        alert('Todo cannot be empty');
      } else {
        dispatch({ type: 'ADD_TODO', payload: todo });
      }
    },
    removeTodo: id => {
      dispatch({ type: 'REMOVE_TODO', payload: id });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
