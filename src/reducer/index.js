import { combineReducers } from 'redux';
import stocksReducer from './profile';
import filterReducer from './filter';

const rootReducer = combineReducers({ stocksReducer, filterReducer });
export default rootReducer;
