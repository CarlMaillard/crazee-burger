import styled from "styled-components";
import {theme} from "../../../../../theme/index"
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";


export default function AdminPanel() {

  const{ isAddSelected,isEditSelected } = useContext(OrderContext )

  return (
     <AdminPanelStyled className="panel-admin" >
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
      </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  border: 1px solid yellow;
  color: ${theme.colors.dark};
  background:${theme.colors.white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;