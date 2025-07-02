import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: ${({ theme }) => theme.bg};
`;

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  return (
    <HeaderContainer>
      <h1>Моё Портфолио</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/projects">Проекты</Link>
        <Link to="/skills">Навыки</Link>
        <Link to="/contact">Контакты</Link>
      </nav>
      <ThemeToggle toggle={toggleTheme} isDark={isDark} />
    </HeaderContainer>
  );
};

export default Header;