import styled, { css } from 'styled-components';
import { theme } from '../../theme';


export default function TextInput({
    value,
    onChange, 
    Icon, 
    className, 
    version="normal",  
    ...extraProps
}) {

  return (
     <TextInTextputStyled className={className} version={version}>
        <div className='icon'>{Icon && Icon}</div>
        <input value={value} onChange={onChange} type="text" {...extraProps}></input>
     </TextInTextputStyled>
  )
}

const TextInTextputStyled = styled.div`  

${(props) => {
    if(props.version === "normal") return extraStyleNormal;
    if(props.version === "minimalist") return extraStyleMinimalist;
}}

    border-radius: ${theme.borderRadius.round};
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px; 

    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.sizes.SM};
        margin: 0 8px 0 10px;
        color:${theme.colors.greySemiDark};

    }

    input{
        border: none;
        font-size:${theme.fonts.sizes.SM};
        width: 100%;
        color:${theme.colors.dark};
        background: transparent;
        
        &::placeholder{
            background: ${theme.colors.white};
            color: ${theme.colors.greyMedium};
        }
    }
     
`
const extraStyleNormal = css`
    background-color: ${theme.colors.white};
    padding: 18px 28px; 
    color: ${theme.colors.greySemiDark};

    input{
        color: ${theme.colors.dark};
    }

    &::placeholder{
            background: ${theme.colors.white};
    }
`

const extraStyleMinimalist = css`
    background-color: ${theme.colors.background_white};
    padding: 8px 16px; 
    color: ${theme.colors.greyBlue};

    input{
        background:${theme.colors.background_white};
        color: ${theme.colors.dark};
    }

    &:focus{
        outline: 0;
    }
`
