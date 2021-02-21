import React from 'react';
import StockList from './components/StockList';
import Navbar from '../common/Navbar';
import Banner from './components/Banner';

const Home = () => (
  <div className="App">
    <Navbar />
    <Banner />
    <StockList />
  </div>
);

export default Home;
