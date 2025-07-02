import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.accent};
`;

interface ThemeToggleProps {
  toggle: () => void;
  isDark: boolean; // ← это обязательное свойство
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggle, isDark }) => {
  return (
    <ToggleButton onClick={toggle} aria-label="Переключить тему">
      {isDark ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;