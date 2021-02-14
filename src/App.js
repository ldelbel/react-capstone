import React from 'react';
import './App.css';
import { profile, list, sectors } from './API/api';

const res = profile('AAPL');
res.then(result => console.log(result)).catch(error => error);

const res2 = list();
res2.then(result => console.log(result[100])).catch(error => error);

const res3 = sectors();
res3.then(result => console.log(result)).catch(error => error);

const App = props => {
  console.log(props);
  return (
    <div className="App">
      Hello World!
    </div>
  );
};

export default App;
