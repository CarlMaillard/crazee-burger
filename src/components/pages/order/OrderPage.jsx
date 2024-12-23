import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from './Navbar';
import Main from './Main';
import { theme } from '../../../theme';


export default function OrderPage () {
    //state 
    const {username} = useParams();
    
    //comportements
  
    //affichage (render)
  return    (
    <OrderPageStyled>
        <div className='container'>
          <Navbar username={username}/>
          <Main/>
        </div>
    </OrderPageStyled>
    
  )          
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  

  .container{
    height: 95vh;
    margin: auto;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
   
   
   }

   
`