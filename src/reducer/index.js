import { list } from '../API/api';
import FILTER_BY_SECTOR from '../constants/index';

const initialState = {
  companiesList: list,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_SECTOR:
      return {
        ...state,
        companiesList: [...state.companiesList, action.payload],
      };
    default:
      return state;
  }
};

export default listReducer;
