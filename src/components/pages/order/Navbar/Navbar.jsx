import styled from 'styled-components';
import Logo from '../../../reusable-ui/Logo';
import { theme } from '../../../../theme';
import { refreshPage } from '../../../../utils/Window';
import NavbarRightSide from './NavbarRightSide';




export default function Navbar({username}) {
  
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={refreshPage}/>
      <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: ${theme.colors.white} ;
    height: 10vh;
    display: flex;
    justify-content: space-between ;
    align-items: center ;
    padding: 0px 20px;

    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page{
    cursor: pointer;
  }
`