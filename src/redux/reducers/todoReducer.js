const initState = {
  todos: [{ id: 1, todo: 'Learn redux' }]
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export default todoReducer;
