 import React from 'react'
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';


export default function Admin() {

  const{isCollapsed,setIsCollapsed} = useContext(OrderContext)

  return (
    
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>  
 )
}

const AdminStyled = styled.div`

      
      /* display: flex;
      flex-direction: column; */
      position: absolute;
      bottom: 0;
      left:0px;
      right: 0px;
    `;