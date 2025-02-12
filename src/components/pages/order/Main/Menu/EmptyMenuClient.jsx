import styled from "styled-components";

export default function EmptyMenuClient() {


  return (
  <EmptyMenuCLientStyled>
    <span>LE MENU EST VIDE</span>
  </EmptyMenuCLientStyled> 
  
  )
}

const EmptyMenuCLientStyled = styled.div`
  display: flex;
  flex-direction: column;

`;
