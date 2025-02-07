import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {

  const {handleAddProduct} = useContext(OrderContext)

  const [title, setTitle] = useState("")
  const [imageSource, setImageSource] = useState("")
  const [price, setPrice] = useState(0)


  const newProduct =  {
   id: new Date().getTime(),
   imageSource: imageSource,
   title: title,
   price: price
 }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    handleAddProduct(newProduct)
    
   }

  const handleTitle = (event) => { 
    setTitle(event.target.value)
  }

  const handleImageSource = (event) => { 
    setImageSource(event.target.value)
  }
  const handlePrice = (event) => { 
    setPrice(event.target.value)
  }

  return(
  <AddFormStyled onSubmit={handleSubmit}> 
    <div className="image-preview" >image</div>
    <div className="input-fields">
      <input value={title} type="text" placeholder="Nom" onChange={handleTitle} /> 
      <input value={imageSource} type="text" placeholder="image url" onChange={handleImageSource} />
      <input value={price ? price : ""} type="text" placeholder="prix" onChange={handlePrice} />
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
