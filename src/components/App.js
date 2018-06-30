import React, { Component } from 'react';
import {Switch, BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/css/normalize.css';
import '../styles/css/typography.css';


import Home from './Home';
import Header from './Header';

const FlexContainer = styled.div`
  display: flex
  flex-flow: row nowrap
  justify-content: center
  background: #efefef
`;

const Container = styled.div`
  flex: 1 100%
  max-width: 1400px
  padding: 10px
  height: 100vh
  display: flex
  flex-flow: column
  font-family: ostrich
`;


const App = () => {
  return (
    <BrowserRouter>
      <FlexContainer>
        <Container>
          <Header />
          <Route exact path="/" component={Home} />
        </Container>
      </FlexContainer>
    </BrowserRouter>
  )
}

export default App;
