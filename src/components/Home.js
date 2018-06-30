import React from 'react'
import styled from 'styled-components';
import { device } from '../styles/utils/style-utils';
import styles from '../styles/css/typography.css';

const FlexContainer = styled.div`
  flex: 1
  display: flex
  flex-flow: column nowrap

  @media ${device.laptop} {
    flex-flow: row nowrap
  }
`;

const Content = styled.div`
  background: #ffffff
  padding: 20px
  margin: 10px
`;

const MainContent = Content.extend`
  flex: 3
`;

const SideContent = Content.extend`
  flex: 1
`;

const SectionTitle = styled.div`
  font-family: panama
  font-size: 2em
`;


const LandingPage = () => {
  return (
    <FlexContainer>
      <MainContent>
        <SectionTitle>MAIN CONTENT</SectionTitle>
      </MainContent>
      <SideContent>
        <SectionTitle>SIDE CONTENT</SectionTitle>
      </SideContent>
    </FlexContainer>
  )
}

export default LandingPage;
