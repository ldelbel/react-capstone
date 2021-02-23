import React from 'react';
import StockList from './components/stocklist/StockList';
import Navbar from '../../common/components/Navbar';
import Banner from './components/banner/Banner';

const Home = () => (
  <div className="App">
    <Navbar />
    <Banner />
    <StockList />
  </div>
);

export default Home;
