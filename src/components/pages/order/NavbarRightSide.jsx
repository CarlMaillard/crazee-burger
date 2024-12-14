import styled from "styled-components";
import Profile from "./Profile.jsx";


export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSidesStyled>
      {/* <div className="admin-button">Admin bouton</div> */}
      <Profile username={username}/>      
    </NavbarRightSidesStyled>
  )
}

const NavbarRightSidesStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center ;
  padding-right: 50px;

  p{
    color: black
  }

  /* .admin-button{
    background: lightblue;
  } */

  .profile {
    background:  yellow;
    display: flex;
    flex-direction: column;
  }

  /* .text-link{
    font-size: 14px;
    background-color: transparent;
    height: 16px !important;
  } */
`;
