import React from 'react';
import { Container, AboutSection, Title, Subtitle, Content, InfoGrid } from '../styles/AboutStyles';

export default function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Redux/Saga', level: 80 },
    { name: 'Styled Components', level: 85 },
    { name: 'PostgreSQL', level: 65 },
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 60 },
  ];

  return (
    <Container id='about'>
      <AboutSection>
        <Title>Sobre Mim</Title>
        <Subtitle>Conheça minha história e habilidades</Subtitle>

        <Content>
          <p>
            Sou um desenvolvedor fullstack entusiasta, com experiência na construção de aplicações web
            modernas e responsivas. Minha jornada no desenvolvimento começou com um forte interesse em
            resolver problemas através da tecnologia, e desde então tenho buscado constante evolução e aprendizado.
          </p>
          <p>
            Com uma sólida base em React, Redux e arquitetura de software, me dedico a escrever código limpo,
            escalável e sustentável. Acredito que um bom desenvolvedor não apenas escreve código que funciona,
            mas código que é fácil de manter, entender e evoluir.
          </p>
        </Content>

        <InfoGrid>
          <div className='info-item'>
            <h4>Formação</h4>
            <p>Ciência da Computação / Engenharia de Software</p>
          </div>
          <div className='info-item'>
            <h4>Experiência</h4>
            <p>Júnior/Pleno - Desenvolvimento Web</p>
          </div>
          <div className='info-item'>
            <h4>Localização</h4>
            <p>São Paulo, Brasil</p>
          </div>
          <div className='info-item'>
            <h4>Disponibilidade</h4>
            <p>Contratação Imediata</p>
          </div>
        </InfoGrid>

        <div className='skills-section'>
          <h3>Habilidades Técnicas</h3>
          <div className='skills-grid'>
            {skills.map(skill => (
              <div key={skill.name} className='skill-card'>
                <div className='skill-header'>
                  <span className='skill-name'>{skill.name}</span>
                  <span className='skill-level'>{skill.level}%</span>
                </div>
                <div className='skill-bar'>
                  <div className='skill-progress' style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AboutSection>
    </Container>
  );
}