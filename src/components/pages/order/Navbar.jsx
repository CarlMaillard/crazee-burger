import styled from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import Logo from '../../reusable-ui/Logo';
import { theme } from '../../../theme';



export default function Navbar({username}) {
  
  return (
    <NavbarStyled>
      <Logo />
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
    padding: 20px 20px;
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-top-left-radius: ${theme.borderRadius.extraRound};


   
 
`