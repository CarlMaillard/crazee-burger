import { React, useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import OrderContext from '../../../context/OrderContext';

export default function OrderPage () {
    //state 
    const [isModeAdmin, setIsModeAdmin] = useState(false);

    //comportements
    const orderContextValue = {
      isModeAdmin,
      setIsModeAdmin
    }
     
    //affichage (render)
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
          <div className='container'>
            <Navbar />
            <Main/>
          </div>
      </OrderPageStyled>
    </OrderContext.Provider>
    
    
  )          
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: auto;   */
  

  .container{
    margin: auto;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
   }
`