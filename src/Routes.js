import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details/:symbol" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
