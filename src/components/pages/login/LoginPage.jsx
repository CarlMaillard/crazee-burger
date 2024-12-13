import React from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';

export default function LoginPage () {
    //state 

    //comportements

    //affichage (render)
  return  (
  <LoginPageStyled >
    <Logo className={"logo-login-page"}/>
    <LoginForm />
  </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::before{
    content: "";
    background: url("./images/F03-burger-background.jpg") rgb(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; 
  }

  .logo-login-page{
    transform: scale(2.5);
  }
 
`