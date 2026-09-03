import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Hero, Title, Subtitle, Description, Buttons, ScrollIndicator } from '../styles/HomeStyles';
import { HiOutlineArrowDown, HiOutlineMail } from 'react-icons/hi';

export default function Home() {
  return (
    <Container>
      <Hero>
        <div className='hero-content'>
          <h2 className='greeting'>Olá, meu nome é</h2>
          <Title>
            Mv<span className='highlight'>develop</span>
          </Title>
          <Subtitle>Desenvolvedor Fullstack</Subtitle>
          <Description>
            Especialista em criar aplicações web modernas, escaláveis e com experiência excepcional do usuário.
            Apaixonado por React, Node.js e por transformar ideias em realidade digital.
          </Description>
          <Buttons>
            <Link to='/projects' className='btn-primary'>
              Ver Projetos
            </Link>
            <Link to='/contact' className='btn-secondary'>
              <HiOutlineMail /> Contato
            </Link>
          </Buttons>
        </div>

        <div className='hero-visual'>
          <div className='avatar'>
            <div className='avatar-placeholder'>
              <span>MV</span>
            </div>
          </div>
          <div className='floating-cards'>
            <div className='card-technology'>
              <span className='tech-icon'>⚛️</span>
              <span>React</span>
            </div>
            <div className='card-technology'>
              <span className='tech-icon'>🟢</span>
              <span>Node.js</span>
            </div>
            <div className='card-technology'>
              <span className='tech-icon'>💜</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </Hero>

      <ScrollIndicator to='about'>
        <HiOutlineArrowDown size={32} />
      </ScrollIndicator>
    </Container>
  );
}