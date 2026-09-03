import React from 'react';
import { Container, ProjectsSection, Title, Subtitle, Grid, MoreProjects } from '../styles/ProjectsStyles';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gerenciamento de Tarefas',
      description: 'Aplicação completa de gerenciamento de tarefas com drag and drop, filtros e persistência local.',
      tech: ['React', 'Redux', 'Styled Components', 'Dnd Kit'],
      status: 'Concluído',
      demo: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'API de E-commerce',
      description: 'API RESTful completa para e-commerce com autenticação, paginação e processamento de pagamentos.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      status: 'Concluído',
      demo: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo com gráficos em tempo real, filtros dinâmicos e exportação de dados.',
      tech: ['React', 'Recharts', 'Redux', 'Axios'],
      status: 'Em Desenvolvimento',
      demo: '#',
      github: '#',
    },
  ];

  return (
    <Container id='projects'>
      <ProjectsSection>
        <Title>Meus Projetos</Title>
        <Subtitle>Trabalhos que demonstram minha capacidade e evolução como desenvolvedor</Subtitle>

        <Grid>
          {projects.map(project => (
            <Card key={project.id} hover padding="lg">
              <div className='card-header'>
                <h3>{project.title}</h3>
                <span className={`status ${project.status === 'Concluído' ? 'completed' : 'in-progress'}`}>
                  {project.status}
                </span>
              </div>

              <p className='card-description'>{project.description}</p>

              <div className='card-tech'>
                {project.tech.map(t => (
                  <span key={t} className='tech-tag'>{t}</span>
                ))}
              </div>

              <div className='card-actions'>
                <Button variant='primary' size='sm' as='a' href={project.github}>
                  Código Fonte
                </Button>
                <Button variant='outline' size='sm' as='a' href={project.demo}>
                  Ver Demo
                </Button>
              </div>
            </Card>
          ))}
        </Grid>

        <MoreProjects>
          <Button variant='outline' as='a' href='https://github.com/mvdevelop' target='_blank'>
            Ver Todos os Projetos no GitHub →
          </Button>
        </MoreProjects>
      </ProjectsSection>
    </Container>
  );
}