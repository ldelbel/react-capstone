const API_KEY = '?apikey=f25597924d4529b7e1d2e609c841a5aa';
const PROFILE_URL = 'https://financialmodelingprep.com/api/v3/profile/';
const LIST_URL = 'https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists';
const SECTOR_URL = 'https://financialmodelingprep.com/api/v3/sectors-performance';

const profile = async company => {
  try {
    const response = await fetch(`${PROFILE_URL}${company}${API_KEY}`, { mode: 'cors' });
    const result = await response.json();
    return result[0];
  } catch (err) {
    return err;
  }
};

const list = async () => {
  try {
    const response = await fetch(`${LIST_URL}${API_KEY}`, { mode: 'cors' });
    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
};

const sectors = async () => {
  try {
    const response = await fetch(`${SECTOR_URL}${API_KEY}`, { mode: 'cors' });
    const result = await response.json();
    return result.map(e => e.sector);
  } catch (err) {
    return err;
  }
};

export { profile, list, sectors };
