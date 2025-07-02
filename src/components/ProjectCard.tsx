import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.bg === '#121212' ? '#1e1e1e' : '#fff'};
  border-radius: 12px;
  overflow: hidden;
  margin: 2rem auto;
  max-width: 600px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Content = styled.div`
  padding: 2rem;
`;

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <Card>
      <ProjectImage src={image} alt={title} />
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
      </Content>
    </Card>
  );
};

export default ProjectCard;