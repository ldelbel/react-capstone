import INITIAL_STATE from '../constants/initial';
import { list } from '../API/api';

let initialState = {};

if (!sessionStorage.getItem('state')) {
  list().then(result => {
    initalState = result;
    sessionStorage.setItem('state', initialState);
  } ).catch(err => err);
} else {
  initialState = INITIAL_STATE;
}

const stocksReducer = (state = initialState) => state;

export default stocksReducer;
