const UPDATE_FILTER_VALUES = 'UPDATE_FILTER_VALUES';
const COUNTRIES = ['US', 'MX', 'BR', 'GB', 'CN', 'FI', 'NL', 'SG', 'IN', 'CA', 'ZA', 'BM', 'DE', 'IE', 'CH', 'LU', 'IL', 'HK', 'TW', 'ES', 'FR', 'MC', 'GR', 'KR', 'PR', 'SE', 'AU', 'RU', 'KY', 'CL', 'CO', 'DK', 'BE', 'JP', 'AR', 'UY', 'CZ', 'VI', 'JE', 'PA', 'TH', 'ID', 'IT', 'TR', 'PH', 'CY', 'GG', 'MO', 'NZ', 'NO', 'PE', 'CR', 'BS', 'PT', 'SN', 'CI', 'IS', 'MA', 'CW', 'IM', 'GA', 'ZM', 'CK', 'VG', 'AE', 'JO', 'MT', 'AT', 'PL', 'FO', 'LI', 'GI', 'AZ', 'FK', 'UA', 'MY', 'MU', 'TC', 'NG', 'MN', 'TG', 'GE', 'VN', 'HU', 'KH', 'SB', 'PG', 'BB', 'BD', 'DO', 'SK', 'AI', 'LT', 'BG'];
const SECTORS = ['Aerospace & Defense', 'Airlines', 'Auto Components', 'Automobiles', 'Banking', 'Basic Materials', 'Beverages', 'Biotechnology', 'Building', 'Chemicals', 'Commercial Services & Supplies', 'Communication Services', 'Communications', 'Construction', 'Consumer Cyclical', 'Consumer Defensive', 'Consumer products', 'Distributors', 'Diversified Consumer Services', 'Electrical Equipment', 'Energy', 'Financial', 'Financial Services', 'Food Products', 'Health Care', 'Healthcare', 'Hotels, Restaurants & Leisure', 'Industrial Conglomerates', 'Industrial Goods', 'Industrials', 'Insurance', 'Leisure Products', 'Life Sciences Tools & Services', 'Logistics & Transportation', 'Machinery', 'Marine', 'Media', 'Metals & Mining', 'Packaging', 'Paper & Forest', 'Pharmaceuticals', 'Professional Services', 'Real Estate', 'Retail', 'Road & Rail', 'Semiconductors', 'Technology', 'Telecommunication', 'Textiles, Apparel & Luxury Goods', 'Tobacco', 'Trading Companies & Distributors', 'Transportation Infrastructure', 'Utilities'];
const EXCHANGES = ['NYSE', 'NASDAQ', 'AMEX', 'EURONEX', 'TSX', 'ETF', 'MUTUAL FUND'];
const PRICES = [100, 200, 300, 500, 1000, 2000];
const INITIAL_FILTER_STATE = {
  filter: {
    price: null,
    sector: null,
    country: null,
    exchange: null,
  },
};

export {
  UPDATE_FILTER_VALUES, COUNTRIES, SECTORS, EXCHANGES, PRICES, INITIAL_FILTER_STATE,
};
