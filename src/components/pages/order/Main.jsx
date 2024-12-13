import styled from "styled-components"


export default function Main() {
  return (
    <MainStyled>
        Main COMPONENT
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background: green;
    flex: 1; //or you can also use this : height: (95vh - 10vh);

`