import React from 'react'
import { Link, useParams } from 'react-router-dom'
 import styled from 'styled-components';
import {theme} from '../../../theme/index'

export default function OrderPage () {
    //state 
    const {username} = useParams();
    
    //comportements
  
    //affichage (render)
  return    (
    <OrderPageStyled>
      <div>
        <div className='container'>
          <div className='navbar'>
            NAVBAR
            <h1>Bonjour {username} !</h1>
            <Link to="/"><button>Déconnexion</button></Link>
          </div>
          <div className='main'>
            MAIN
          </div>
        </div>
      </div>
    </OrderPageStyled>
    
  )          
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  

  .container{
    background: red;
    height: 95vh;
    margin: auto;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .navbar{
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between ;
    align-items: center ;
    padding: 20px 70px;
   }
   
   .main {
    background: green;
    flex: 1; //or you can also use this : height: (95vh - 10vh);
   } 

   }

   
`