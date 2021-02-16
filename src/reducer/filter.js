import { UPDATE_FILTER_VALUES } from '../constants/index';

const initialState = {
  filter: {
    price: null,
    sector: null,
    country: null,
    exchange: null,
  }
};

const filterReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_FILTER_VALUES:
      return {
        ...state,
        filter: action.payload,
      }
  }
};

export default filterReducer;
