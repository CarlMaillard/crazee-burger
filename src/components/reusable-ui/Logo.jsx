import styled from 'styled-components';

export default function Logo() {
  return  (
  <LogoStyled>
    <h1>CRAZEE</h1>
    <img src="/images/F03-logo-orange.png" alt="logo-burger" />
    <h1>BURGER</h1>
  </LogoStyled>
  )
}

const LogoStyled = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  /* transform: scale(2.5); */
  
  

  h1 {
    display: inline;
    text-align: center;
    color: orange;
    font-size: 115px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 150px;
    margin: 0 5px;
  }
`;


