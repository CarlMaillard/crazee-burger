import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";


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
            <div className="input-with-icon">
                <BsPersonCircle className='icon'/>
                <input value={inputValue}  type="text" placeholder='Entrez votre prénom' onChange={handleChange} required/>
            </div>
            <button className='button-with-icon'>
                <span> Accéder à mon espace</span>
                <FaChevronRight className='icon'/>
            </button>            
        </div>
    </LoginFormStyled>     
  )
}


const LoginFormStyled = styled.div `
background-color: green;
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

.input-with-icon {
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px; 
    margin: 18px 0;

    .icon{
        width: 15px;
        height: 15px;
        margin-right: 10px;
        color: #93a2b1;

    }

    input{
    border: none;
    font-size:15px;
    width: 100%;
    color:#17161a;
    background: transparent;
    
    }

    &::placeholder{
        background: white;
        color: lightgray;
    }

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
