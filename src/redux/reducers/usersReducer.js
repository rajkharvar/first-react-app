const initState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export default usersReducer;
