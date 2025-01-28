import styled from "styled-components";
import {theme} from "../../../../../theme/index"
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";


export default function AdminPanel() {

  const { currentTabSelected} = useContext(OrderContext)

  const tabs = getTabsConfig(currentTabSelected)
  const tabSelected = getTabSelected(tabs,currentTabSelected);

  return (
     <AdminPanelStyled className="panel-admin" >
      {currentTabSelected === tabSelected.index && tabSelected.label }
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