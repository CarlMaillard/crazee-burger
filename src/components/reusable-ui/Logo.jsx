import styled from 'styled-components';
import { theme } from '../../theme/index';


export default function Logo({className, onClick}) {
  return  (
  <LogoStyled className={className} onClick={onClick}>
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
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.sizes.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase; 
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 36px;
    margin: 0 5px;
  }
`;


