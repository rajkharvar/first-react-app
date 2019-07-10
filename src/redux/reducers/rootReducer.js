import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import usersReducer from './usersReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
  usersReducer
});

export default rootReducer;
