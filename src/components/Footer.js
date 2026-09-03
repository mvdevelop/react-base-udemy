import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Container, Links, SocialIcons, SocialLink, Copyright } from '../styles/FooterStyles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <div className='footer-content'>
        <div className='footer-brand'>
          <h3>Mvdevelop</h3>
          <p>Desenvolvedor Fullstack apaixonado por criar soluções elegantes e eficientes.</p>
        </div>

        <Links>
          <div className='footer-section'>
            <h4>Navegação</h4>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>Sobre</a></li>
              <li><a href='/projects'>Projetos</a></li>
              <li><a href='/contact'>Contato</a></li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>Tecnologias</h4>
            <ul>
              <li>React / Next.js</li>
              <li>Node.js / TypeScript</li>
              <li>Redux / Context API</li>
              <li>Styled Components</li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>Contato</h4>
            <ul>
              <li>marco.pinto.dev@gmail.com</li>
              <li>São Paulo, Brasil</li>
              <li>Disponível para contratação</li>
            </ul>
          </div>
        </Links>

        <SocialIcons>
          <SocialLink
            href='https://github.com/mvdevelop'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <FaGithub size={20} />
          </SocialLink>
          <SocialLink
            href='https://linkedin.com/in/marcoapinto'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaLinkedin size={20} />
          </SocialLink>
          <SocialLink
            href='https://twitter.com/mvdevelop'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <FaTwitter size={20} />
          </SocialLink>
          <SocialLink
            href='mailto:marco.pinto.dev@gmail.com'
            aria-label='Email'
          >
            <FaEnvelope size={20} />
          </SocialLink>
        </SocialIcons>

        <Copyright>
          <p>&copy; {currentYear} Mvdevelop. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ e React</p>
        </Copyright>
      </div>
    </Container>
  );
}