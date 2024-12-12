import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import  TextInput from '../../reusable-ui/TextInput';


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
            <button className='button-with-icon'>
                <span> Accéder à mon espace</span>
                <FaChevronRight className='icon'/>
            </button>            
        </div>
    </LoginFormStyled>     
  )
}


const LoginFormStyled = styled.form `
text-align: center;
max-width: 500px;
min-width: 400px;
margin: Opx auto;
padding: 2.5rem 2rem;
border-radius: 5px;
font-family: "Amatic SC", cursive;

hr{
    border:1.5px solid #f56a2c;
    margin-bottom: 40px; 
}

h1{
    color: white;
    font-size: 48px;
}

h2 {
    color: white;
    margin: 20px 10px 20px;
    font-size: 36px;
  }
   
.button-with-icon {
    width:100%;
    height: 53px;
    background-color: orange;
    font-family: "Open sans", cursive;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1px;
    

    
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    
    &:hover:not(:disabled) {
        background-color: white;
        color: #ff9f1b;
        border: 1px solid #ff9f1b;
        transition: all 200ms ease-out;
    }

    &:active {
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b; 
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-left: 15px;
    }
}
 `


/** 4 methodes pour ajouter du style à un composant.
 * 1. inline style
 * 2. object style
 * 3. modules css(avec classname)
 * 4. global style (index.css)
 * 5. style component
 */
