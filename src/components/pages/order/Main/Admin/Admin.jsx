import React from 'react'
import styled from 'styled-components';
// import { theme } from '../../../../../theme';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import { useState } from 'react';

export default function Admin() {

  const[isCollapsed, setIsCollapsed] = useState(false);

  return (
    
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel/>}
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