
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
    display: flex;
    justify-content: space-between ;
    align-items: center ;

    h1{
        font-size: 32px;
    }
`;
