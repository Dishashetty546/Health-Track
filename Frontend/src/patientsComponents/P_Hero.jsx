import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url('./phero.png'); // Correct the path if necessary
  background-size: cover;
  background-position: center;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`;

// Component
const P_Hero = () => {
  return (
    <Container>
      <ImageSection />
      <ContentSection>
        <h1>Your Content Here</h1>
      </ContentSection>
    </Container>
  );
};

export default P_Hero;
