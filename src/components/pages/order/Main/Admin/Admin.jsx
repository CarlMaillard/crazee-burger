import React from 'react'
import styled from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel/AdminPanel';


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
      z-index: 2;
      bottom: 0;
      left:0px;
      right: 0px;
    `;