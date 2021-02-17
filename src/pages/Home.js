import React from 'react';
import '../App.css';
import CompaniesList from '../components/CompaniesList';
import Navbar from '../components/Navbar';

const Home = () => (
  <div className="App">
    <Navbar />
    <CompaniesList />
  </div>
);

export default Home;
