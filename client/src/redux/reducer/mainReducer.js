import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';

export const mainReducer = combineReducers({
  counters: counterReducer,
});

