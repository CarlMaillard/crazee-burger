import styled from "styled-components";
import Profile from "./Profile.jsx";
import ToggleButton from "../../../reusable-ui/ToggleButton.jsx"

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSidesStyled>
      <ToggleButton labelIfChecked="DÉSACTIVER LE MODE ADMIN" labelIfUnchecked="ACTIVER LE MODE ADMIN" />
      <Profile username={username}/>      
    </NavbarRightSidesStyled>
  )
}

const NavbarRightSidesStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center ;
  padding-right: 50px;
`;
