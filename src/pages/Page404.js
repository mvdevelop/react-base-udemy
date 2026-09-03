import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import { Container, ErrorCode, Title, Description, ButtonLink } from '../styles/Page404Styles';

export default function Page404() {
  return (
    <Container>
      <FaExclamationTriangle size={64} className="icon" />
      <ErrorCode>404</ErrorCode>
      <Title>Página não encontrada</Title>
      <Description>
        A página que você está procurando pode ter sido removida, alterada ou nunca existiu.
        Verifique o endereço ou volte para a página inicial.
      </Description>
      <ButtonLink to="/">
        <FaHome /> Voltar para o início
      </ButtonLink>
    </Container>
  );
}