const API_KEY = 'apikey=f25597924d4529b7e1d2e609c841a5aa';
const PROFILE_URL = 'https://financialmodelingprep.com/api/v3/profile/';
const LIST_URL = 'https://financialmodelingprep.com/api/v3/stock-screener?limit=500';
const QUOTE_URL = 'https://financialmodelingprep.com/api/v3/quote/';

const profile = async company => {
  try {
    const response = await fetch(`${PROFILE_URL}${company}${API_KEY}`, { mode: 'cors' });
    const result = await response.json();
    return result[0];
  } catch (err) {
    return err;
  }
};

const quote = async symbol => {
  try {
    const response = await fetch(`${QUOTE_URL}${symbol}?${API_KEY}`, { mode: 'cors' });
    const result = await response.json();
    return result[0];
  } catch (err) {
    return err;
  }
};

const fetchStocks = async () => {
  try {
    const response = await fetch(`${LIST_URL}&${API_KEY}`, { mode: 'cors' });
    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
};

export {
  profile, fetchStocks, quote,
};
