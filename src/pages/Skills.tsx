import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  li {
    background-color: ${({ theme }) => theme.accent};
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-size: 1.4rem;
    transition: background 0.3s ease;
  }
`;

const Skills: React.FC = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Git'];
  return (
    <section>
      <SkillsContainer>
        <h2>Навыки</h2>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </SkillsContainer>
    </section>
  );
};

export default Skills;