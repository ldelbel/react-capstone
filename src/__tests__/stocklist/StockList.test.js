import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import StockList from '../../pages/home/components/stocklist/StockList';
import rootReducer from '../../reducer/index';

it('renders correctly when store is provided', () => {
  const store = createStore(rootReducer);
  const stockList = renderer.create(
    <Provider store={store}>
      <StockList />
    </Provider>,
  ).toJSON();
  expect(stockList).toMatchSnapshot();
});
