import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Title, Paragrafo, Form, InputGroup, Button } from '../styles/LoginStyles';
import * as exampleActions from '../store/modules/example/actions';
import TextInput from '../components/Input';

export default function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Simulação de login (em produção, isso seria uma chamada de API)
    setError('');

    // Reset do formulário
    setForm({ email: '', password: '' });

    // Dispatch da ação original (mantido por compatibilidade)
    dispatch(exampleActions.clicaBotaoRequest());

    // Em um app real, aqui faríamos a chamada de API de autenticação
  };

  return (
    <Container>
      <Title>Login</Title>
      <Paragrafo>
        Acesse sua conta para continuar
      </Paragrafo>

      {error && (
        <div style={{
          background: '#fee2e2',
          color: '#dc2626',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          ⚠️ {error}
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <TextInput
            label="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <Button type='submit' variant='primary' fullWidth>
          Entrar
        </Button>
      </Form>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          Não tem conta? <Link to='/register' style={{ color: '#4a6cf7', textDecoration: 'underline' }}>Cadastre-se</Link>
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          <Link to='/forgot-password' style={{ color: '#4a6cf7' }}>Esqueceu a senha?</Link>
        </p>
      </div>
    </Container>
  );
}