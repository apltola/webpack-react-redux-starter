import React, { Component } from 'react';
import {Switch, BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/css/normalize.css';

import Home from './Home';
import NotFound from './NotFound';
import Header from './Header';

const Container = styled.div`
  font-family: sans-serif;
  padding: 10px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound}/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App;
