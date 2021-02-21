const initialState = [];

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchAPI':
      return {
        list: action.payload,
      };
    default:
      return state;
  }
};

export default stocksReducer;
