import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSidesStyled>
          <h1>Hey, {username} !</h1>
          <Link to="/"><button>Se déconnecter</button></Link>
    </NavbarRightSidesStyled>
  )
}

const NavbarRightSidesStyled = styled.div`
  background: pink;
  height: 100%;
  display: flex;
  justify-content: space-between ;
  align-items: center ;

  h1{
    font-size: ${theme.fonts.sizes.P2 };
  }
`;
