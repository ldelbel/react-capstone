import React from 'react';
import './App.css';
import company from './API/api';

const res = company();
res.then(result => console.log(result[0].companyName)).catch(error => error);

const App = () => {
  console.log(res);
  return (
    <div className="App">
      Hello World!
    </div>
  );
};

export default App;
