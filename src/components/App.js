import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
