import React, { Component } from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-bottom: 2px solid #D8D8D8;
`;

const Brand = styled.div`
  font-size: 2rem;
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