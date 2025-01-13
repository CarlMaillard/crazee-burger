import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';

export default function Admin() {
  return (
    
    <AdminStyled>
      <AdminTabs/>
      <AdminPanel/>

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