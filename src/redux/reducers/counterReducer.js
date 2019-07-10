const initState = { counter: 0 };

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC': {
      return { counter: state.counter + 1 };
    }
    case 'DEC': {
      return { counter: state.counter - 1 };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
