const API_KEY = 'f25597924d4529b7e1d2e609c841a5aa';
const URL = `https://financialmodelingprep.com/api/v3/profile/8521.HK?apikey=${API_KEY}`;

const company = async () => {
  try {
    const response = await fetch(URL, { mode: 'cors' });
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export default company;
