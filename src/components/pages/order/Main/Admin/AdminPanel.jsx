import styled from "styled-components";
import {theme} from "../../../../../theme/index"


export default function AdminPanel() {
  return (
    <AdminPanelStyled>AdminPanel</AdminPanelStyled>
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