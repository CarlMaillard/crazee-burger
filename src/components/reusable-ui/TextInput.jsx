import styled from 'styled-components';
import { theme } from '../../theme';


export default function TextInput({value,onChange, Icon,  ...extraProps}) {
 console.log("rest:" ,extraProps)
  return (
     <InputStyled>
        <div className='icon'>{Icon && Icon}</div>
        <input value={value} onChange={onChange} type="text" {...extraProps}></input>
     </InputStyled>
  )
}

const InputStyled = styled.div`  
    background-color: white;
    border-radius: ${theme.borderRadius.round};
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px; 
    margin: 18px 0;

    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.sizes.SM};
        /* width: 15px;
        height: 15px; */
        margin-right: 8px;
        margin-left: 10px;
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