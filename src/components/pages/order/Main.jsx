import styled from "styled-components"
import { theme } from "../../../theme"


export default function Main() {
  return (
    <MainStyled>
        Main COMPONENT
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    flex: 1; //or you can also use this : height: (95vh - 10vh);
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset 

`