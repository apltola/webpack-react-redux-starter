import React, { Component } from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex
  align-content: flex-end
  margin-bottom: 20px
  background: #FFE644
  padding: 15px 10px 0 10px 
`;

const Brand = styled.div`
  font-size: 6em
  display: block;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Brand>
          webpack + react + redux
        </Brand>
      </HeaderContainer>
    )
  }
}

export default Header;