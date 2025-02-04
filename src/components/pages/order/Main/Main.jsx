import styled from "styled-components"
import { theme } from "../../../../theme"
import Menu from "./Menu"
import Admin from "../Main/Admin/Admin"
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext.jsx";




export default function Main() {

  const{isModeAdmin, setIsModeAdmin} = useContext(OrderContext)

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        { isModeAdmin && <Admin /> }
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
    border: 5px solid green;
    background: ${theme.colors.background_white};
    /* flex: 1; //or you can also use this : height: (95vh - 10vh); */
    height: calc(95vh - 10vh);

    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  
    display: grid;
    grid-template-columns:1fr;


    /* .basket { 
      background: pink;
    } */
    
    .menu-and-admin{
      position: relative;
      overflow-y: hidden;
      display: grid;
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
    }
      

    
`