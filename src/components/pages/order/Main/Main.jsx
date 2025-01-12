import styled from "styled-components"
import { theme } from "../../../../theme"
import Menu from "./Menu"


export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    flex: 1; //or you can also use this : height: (95vh - 10vh);
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    overflow-y:scroll;
    overflow-x: hidden;

    display: grid;
    grid-template-columns: 1fr;

    /* .basket {
      background: blue;
    } */

`