import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import  TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton'
import { theme } from '../../../theme/index';



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
        <div>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous </h2>

            <TextInput 
            value={inputValue}
            onChange={handleChange} 
            placeholder={"Entrez votre prénom"} 
            required
            Icon={<BsPersonCircle className='icon'/>}
            />

            <PrimaryButton
            Label="Accéder à mon espace"
            Icon={<FaChevronRight className='icon'/>}
            />
                   
        </div>
    </LoginFormStyled>     
  )
}


const LoginFormStyled = styled.form `
text-align: center;
max-width: 500px;
min-width: 400px;
margin: Opx auto;
padding: 40px ${theme.spacing.lg};
border-radius: ${theme.borderRadius.roundg};
font-family: "Amatic SC", cursive;

hr{
    border:1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px; 
}

h1{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.P5};
}

h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 20px;
    font-size: ${theme.fonts.sizes.P4};
  }
  
.icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.sizes.P0};
        margin-left: 10px;
}
`


/** 4 methodes pour ajouter du style à un composant.
 * 1. inline style
 * 2. object style
 * 3. modules css(avec classname)
 * 4. global style (index.css)
 * 5. style component
 */
