import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuAdmin({onReset}) {

  return (
  <EmptyMenuAdmintStyled>
    <span className="top-title">Le menu est vide ?</span>
    <br/>
    <span className="bottom-title">Cliquez ci-dessous pour le réinitialiser</span>
    <br/>
    {/* <ButtononClick={onReset} Label="Générer de nouveaux produits" /> */}
    <button onClick={onReset}>CLIQUEZ ICI POUR LE RÉINITIALISER</button>
  </EmptyMenuAdmintStyled> 
  
  )
}

const EmptyMenuAdmintStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Amatic SC", cursive;

.top-title{
    font-size: ${theme.fonts.sizes.P4};
    font-weight: ${theme.fonts.weights.bold};
}
.bottom-title{
    font-size: ${theme.fonts.sizes.P4};
    font-weight: ${theme.fonts.weights.regular};
}
`;