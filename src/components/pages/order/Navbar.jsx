import styled from 'styled-components';
import NavbarRightSide from './NavbarRightSide';



export default function Navbar({username}) {
  
  return (
    <NavbarStyled>
      <div className='left-side'> Logo</div>
      <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between ;
    align-items: center ;
    padding: 20px 70px;

  .left-side{
    background: purple;
    display: flex;
    justify-content: space-between ;
    align-items: center ;
  }
`