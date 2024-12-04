import React from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components';
import burgerBackground from '../../../assets/images/F03-burger-background.jpg';
import Logo from '../../reusable-ui/Logo';

export default function LoginPage () {
    //state 

    //comportements

    //affichage (render)
  return  (
  <LoginPageStyled >
    <Logo/>
    <LoginForm />
  </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  background: red;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${burgerBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;