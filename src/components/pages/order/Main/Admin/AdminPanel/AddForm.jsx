import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {

  const {handleAddProduct} = useContext(OrderContext)

  const newProduct =  {
   id: new Date().getTime(),
   imageSource: "/images/burger-bacon-egg.png",
   title: "Carlitoooo BBQ",
   price: 8,
 }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddProduct(newProduct)
   }

  
  return(
  <AddFormStyled onSubmit={handleSubmit}> 
    <div className="image-preview" >image</div>
    <div className="input-fields">
      <input type="text" placeholder="Nom" value /> 
      <input type="text" placeholder="image url" />
      <input type="text" placeholder="prix" />
    </div>
    <button className="submit-button" >submit-button</button>
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

  display: grid;
  width: 50%;
}
`
