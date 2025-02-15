import styled from "styled-components";
import { theme } from "../../../../../theme";
import Button from "../../../../reusable-ui/Button";


export default function EmptyMenuAdmin({onReset}) {

  return (
  <EmptyMenuAdmintStyled>
    <span className="title">Le menu est vide ?</span>
    <br/>
    <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
    <br/>
    <Button onClick={onReset} Label="Générer de nouveaux produits" />
  </EmptyMenuAdmintStyled> 
  
  )
}

const EmptyMenuAdmintStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  font-family: "Amatic SC", cursive;

.title{
    font-size: ${theme.fonts.sizes.P4};
    font-weight: ${theme.fonts.weights.semiBold};
}

.description{
    font-size: ${theme.fonts.sizes.P4};
    font-weight: ${theme.fonts.weights.regular};
}
`;