import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {


  return (
    <EmptyMenuClientStyled>
      <span className="title">Victime de notre succès ! :D</span>
      <br/>
      <span className="description">De nouvelles recettes sont en cours de préparation.</span>
      <br/>
      <span className="description">À très vite !</span>
    </EmptyMenuClientStyled> 
    
    )
  }
  
  const EmptyMenuClientStyled = styled.div`
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