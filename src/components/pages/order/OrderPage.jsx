import { React, useContext, useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';
import { EMPTY_PRODUCT } from './Main/Admin/AdminPanel/AddForm';

export default function OrderPage () {
    //state 
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isEditSelected ,setIsEditSelected] = useState(true)
    const [isAddSelected, setIsAddSelected] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu.LARGE)
    const [ newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

    
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
  
     const resetMenu = () => { 
        setMenu(fakeMenu.MEDIUM)
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
      handleDelete,
      resetMenu,
      newProduct,
      setNewProduct
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
  height: auto;
  width: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: auto;   */
  

  .container{
    margin: auto;
    height: 833px;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
   }
`