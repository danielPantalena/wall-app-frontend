import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, SignUp, NotFound } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
