import React from 'react';
import StockList from '../components/StockList';
import Navbar from '../components/Navbar';

const Home = () => (
  <div className="App">
    <Navbar />
    <StockList />
  </div>
);

export default Home;
