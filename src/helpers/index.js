const mapStockstoProps = state => {
  const { list } = state.stocksReducer;
  const { filter } = state.filterReducer;
  const filterMultiple = (array, price, sector, country, exchange ) => {

  }


  return {
    list: !Object.values(filter).some(x => x !== null) ? list
      : list.filter(),
  };
};
