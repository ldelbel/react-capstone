const mapStockstoProps = state => {
  const { list } = state.stocksReducer;
  // const { filter } = state.filterReducer;
  // const filterMultiple = (array, price, sector, country, exchange) => {
  //   let filtered = array;
  //   if (price) filtered = filtered.filter(e => e.price < price);
  //   if (sector) filtered = filtered.filter(e => e.sector === sector);
  //   if (country) filtered = filtered.filter(e => e.country === country);
  //   if (exchange) filtered = filtered.filter(e => e.exchange === exchange);
  //   return filtered;
  // };

  return { list };

  // {
  //   // list: filterMultiple(list, filter.price, filter.sector, filter.country, filter.exchange),
  //   list: list,
  // };
};

export default mapStockstoProps;
