import { Link} from 'react-router-dom';
import styled from 'styled-components';



export default function Navbar({username}) {
  
  return (
    <NavbarStyled>
      <div className='left-side'>
        Logo
      </div>

      <div className='right-side'>
        <h1>Hey, {username} !</h1>
        <Link to="/"><button>Se déconnecter</button></Link>
      </div>
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

  .right-side{
    background: pink;
    display: flex;
    justify-content: space-between ;
    align-items: center ;
  }
  .left-side{
    background: purple;
    display: flex;
    justify-content: space-between ;
    align-items: center ;
  }
`