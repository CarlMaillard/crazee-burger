import styled, { css } from 'styled-components';
import { theme } from '../../theme';


export default function Button({Icon, Label, version="normal", onClick}) {
  return ( 
    <ButtonStyled  version={version} onClick={onClick}>
                <span>{Label} </span>
                <div className='icon'>{Icon && Icon}</div>
    </ButtonStyled>      
  )
}

const ButtonStyled = styled.button`
    ${({ version }) => extraStyle[version] }
`

const extraStylePrimary = css`

    width:100%;
    background-color: orange;
    font-family: "Open sans", cursive;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1px;
    padding: 18px 18px;
    

    
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    
    &:hover:not(:disabled) {
        background-color: white;
        color: #ff9f1b;
        border: 1px solid #ff9f1b;
        transition: all 200ms ease-out;
    }

    &:active {
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b; 
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const extraStyleSuccess = css`
    cursor: pointer;
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};
    height: 43px;
    /* padding: 18px 18px; */
    padding: 0 1.5em;
    font-weight: ${theme.fonts.weights.semiBold};
    font-family: "Open sans", cursive;


    &:hover{
        background: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }

    &:active{
        background: ${theme.colors.success};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.success};
    }
 
`


const extraStyle = {
    normal: extraStylePrimary,
    success: extraStyleSuccess
}