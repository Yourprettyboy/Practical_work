import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import styled from 'styled-components';

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 4rem 2rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
    max-width: 600px;
  }
`;

const Home: React.FC = () => {
  return (
    <AnimatedSection>
      <Hero>
        <h1>Привет, я Frontend разработчик</h1>
        <p>Создаю современные и интерактивные веб-приложения.</p>
      </Hero>
    </AnimatedSection>
  );
};

export default Home;