import { React, useContext, useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';

export default function OrderPage () {
    //state 
    const [isModeAdmin, setIsModeAdmin] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [isEditSelected ,setIsEditSelected] = useState(true)
    const [isAddSelected, setIsAddSelected] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu.LARGE)

    
    //comportements 

    const handleAddProduct = (newProduct) => {
      const copyMenu = [...menu] ;
      const menuUpdated = [newProduct, ...copyMenu];
      setMenu(menuUpdated);
    }

    const handleDelete = (idOfProductDeleted) => { 
  
      const menuCopy = [...menu]

      const menuUpdate = menuCopy.filter((product) => product.id !== idOfProductDeleted);
  
      setMenu(menuUpdate)
     }
  

    const orderContextValue = {
      isModeAdmin,
      setIsModeAdmin,
      isCollapsed,
      setIsCollapsed,
      isEditSelected,
      setIsEditSelected,
      isAddSelected,
      setIsAddSelected,
      currentTabSelected,
      setCurrentTabSelected,
      menu,
      handleAddProduct,
      handleDelete
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