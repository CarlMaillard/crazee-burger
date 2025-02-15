import styled from "styled-components";
import { useContext } from "react";
import { getTabsConfig, getTabSelected } from "../getTabsConfig";
import { theme } from "../../../../../../theme";
import OrderContext from "../../../../../../context/OrderContext";



export default function AdminPanel() {

  const { currentTabSelected} = useContext(OrderContext)



  const tabs = getTabsConfig(currentTabSelected)
  const tabSelected = getTabSelected(tabs,currentTabSelected);

  return (
     <AdminPanelStyled className="panel-admin" >
      {currentTabSelected === tabSelected.index && tabSelected.Content }
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  color: ${theme.colors.dark};
  background:${theme.colors.white};
  min-height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.subtle};

  .input-ajout{
    background-color: ${theme.colors.background_white};
  }
`;