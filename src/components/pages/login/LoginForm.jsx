import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginForm() {
 //state
 const [inputValue, setInputValue] = useState(""); 
 const navigate = useNavigate();   

 //comportements

  const handleSubmit = (event) =>{
     event.preventDefault();
     setInputValue("");
     navigate(`order/${inputValue}`);
 }

 const handleChange = (event) =>{ 
     setInputValue(event.target.value)
 }


  return (
        //affichage (render)

    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez-vous </h2>
        <input value={inputValue}  type="text" placeholder='Entrez votre prénom...' onChange={handleChange} required/>
        <button> Accéder à votre espace</button>
    </LoginFormStyled>     
  )
}


const LoginFormStyled = styled.form`
border: 10px  solid red;
 `
/** 4 methodes pour ajouter du style à un composant.
 * 1. inline style
 * 2. object style
 * 3. modules css(avec classname)
 * 4. global style (index.css)
 * 5. style component
 */
