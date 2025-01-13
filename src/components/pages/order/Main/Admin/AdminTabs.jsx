import styled from "styled-components";
import { theme } from "../../../../../theme";


export default function AdminTabs() {
  return (
    <AdminTabsStyled>AdminTabs</AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  border: 1px solid red;
  color: ${theme.colors.dark}
`;