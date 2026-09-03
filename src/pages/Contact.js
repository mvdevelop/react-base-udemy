import React, { useState } from 'react';
import { Container, ContactSection, Title, Subtitle, Form } from '../styles/ContactStyles';
import Button from '../components/Button';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Aqui seria integrado com um serviço de email (EmailJS, Formspree, etc.)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container id='contact'>
      <ContactSection>
        <Title>Entre em Contato</Title>
        <Subtitle>Tem um projeto em mente? Vamos construir algo incrível juntos</Subtitle>

        <div className='contact-content'>
          <Form onSubmit={handleSubmit}>
            <div className='form-row'>
              <Input
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Seu nome'
                required
              />
              <Input
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Seu e-mail'
                required
              />
            </div>

            <Input
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Assunto'
              required
            />

            <Textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Sua mensagem...'
              rows={5}
              required
            />

            <Button
              type='submit'
              variant='primary'
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </Form>

          <div className='contact-info'>
            <div className='info-item'>
              <h4>📧 E-mail</h4>
              <a href='mailto:marco.pinto.dev@gmail.com'>marco.pinto.dev@gmail.com</a>
            </div>
            <div className='info-item'>
              <h4>📱 WhatsApp</h4>
              <a href='https://wa.me/5511999999999'>+55 11 99999-9999</a>
            </div>
            <div className='info-item'>
              <h4>📍 Localização</h4>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>
      </ContactSection>
    </Container>
  );
}