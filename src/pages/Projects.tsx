import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "BinGo!",
      description: "Приложение vk-mini-app, созданное для просвещения людей в исскуство.",
      image: "/images/bingo.png"
    },
    {
      title: "Followwish",
      description: "Приложение вишлист, для того чтобы делиться своими хотелками с друзьями",
      image: "/images/followwish.png"
    },
    {
      title: "Какой-то пёс",
      description: "третьего проекта нету(",
      image: "/images/dog,png"
    }
  ];

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Мои Проекты</h2>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </section>
  );
};

export default Projects;