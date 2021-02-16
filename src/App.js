import React from 'react';
import './App.css';
import CompaniesList from './components/CompaniesList';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <CompaniesList />
  </div>
);

export default App;
