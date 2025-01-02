import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function Admin() {
  return (
    <AdminStyled>Ajouter un produit</AdminStyled>  
 )
}

const AdminStyled = styled.div`

      background:${theme.colors.background_white};
      color: ${theme.colors.background_dark};
      font-size: ${theme.fonts.sizes.P0};
      border: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};

      display: flex;
      flex-direction: row;
      padding-left: 20px;
      padding-top: 17px;
      height: 250px;
      position: absolute;
      bottom: 0;
      left:0px;
      right: 0px;
    `;