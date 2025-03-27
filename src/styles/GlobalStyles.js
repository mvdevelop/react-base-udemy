
import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/ReactToastify.css';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
}

html, body, #root { height: 100%; }

button {
  cursor: pointer;
  background: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.5);
  font-weight: 700;
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul { list-style: none; }

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
}

`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.3);
`;
