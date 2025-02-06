import styled from "styled-components";

export default function AddForm() {
  return(
  <AddFormStyled> 
    <div className="image-preview">image</div>
    <div className="input-fields">
      <input type="text" placeholder="Nom" /> 
      <input type="text" placeholder="image url" />
      <input type="text" placeholder="prix" />
    </div>
    <div className="submit-button">submit-button</div>
  </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
border: 1px solid red;
padding: 30px 5%;
display: grid;
grid-template-columns:  1fr 3fr ;
grid-template-rows:  repeat(4, 1fr);
height: 100%;
width: 70%;
 

.image-preview{
  background: red;
  grid-area: 1 / 1 / 4 / 2;
}

.input-fields{
  background:  blue;
  grid-area: 1 / 2 / 4 / 3;
  
  display: grid;
 
}

.submit-button{
  background:  green;
  grid-area: 4 / 2 / 5 / 3;
}
`
