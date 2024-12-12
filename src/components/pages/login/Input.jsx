import styled from 'styled-components';

export default function Input({value,onChange, Icon,  ...extraProps}) {
 console.log("rest:" ,extraProps)
  return (
     <InputStyled>
        {Icon && Icon}
        <input onChange={onChange} type="text" {...extraProps}></input>
     </InputStyled>
  )
}

const InputStyled = styled.div`  
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px; 
    margin: 18px 0;

    .icon{
        width: 15px;
        height: 15px;
        margin-right: 10px;
        color: #93a2b1;

    }

    input{
    border: none;
    font-size:15px;
    width: 100%;
    color:#17161a;
    background: transparent;
    
    }

    &::placeholder{
        background: white;
        color: lightgray;
    }
`