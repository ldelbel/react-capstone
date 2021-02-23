import { fetchStocks } from '../API/api';

const populateList = async dispatch => {
  const response = await fetchStocks();
  dispatch({ type: 'fetchAPI', payload: response });
};

export default populateList;
