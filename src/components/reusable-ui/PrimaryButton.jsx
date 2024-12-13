import styled from 'styled-components';

export default function PrimaryButton({Icon, Label}) {
  return (
    <PrimaryButtonStyled>
                <span>{Label} </span>
                {Icon && Icon}
    </PrimaryButtonStyled>      
  )
}

const PrimaryButtonStyled = styled.button`
    
    width:100%;
    height: 53px;
    background-color: orange;
    font-family: "Open sans", cursive;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1px;
    

    
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

  
`